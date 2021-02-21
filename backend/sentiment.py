from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import stopwords, twitter_samples
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk import FreqDist, classify, NaiveBayesClassifier
import nltk
from nltk.corpus import opinion_lexicon
from nltk.tokenize import treebank
from nltk.sentiment.vader import SentimentIntensityAnalyzer

import re, string, random, pickle, os

SAVED_CLSR_LOC = './article_sentiment_clsr.pickle'

def remove_noise(tweet_tokens, stop_words = ()):

    cleaned_tokens = []

    for token, tag in pos_tag(tweet_tokens):
        token = re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|'\
                       '(?:%[0-9a-fA-F][0-9a-fA-F]))+','', token)
        token = re.sub("(@[A-Za-z0-9_]+)","", token)

        if tag.startswith("NN"):
            pos = 'n'
        elif tag.startswith('VB'):
            pos = 'v'
        else:
            pos = 'a'

        lemmatizer = WordNetLemmatizer()
        token = lemmatizer.lemmatize(token, pos)

        if len(token) > 0 and token not in string.punctuation and token.lower() not in stop_words:
            cleaned_tokens.append(token.lower())
    return cleaned_tokens

def dlll_pos_neg_ratio(text):
    tokenizer = treebank.TreebankWordTokenizer()
    pos_words = 0
    neg_words = 0
    tokenized_sent = [word.lower() for word in tokenizer.tokenize(text)]

    x = list(range(len(tokenized_sent)))  # x axis for the plot
    y = []

    for word in tokenized_sent:
        if word in opinion_lexicon.positive():
            pos_words += 1
            y.append(1)  # positive
        elif word in opinion_lexicon.negative():
            neg_words += 1
            y.append(-1)  # negative
        else:
            y.append(0)  # neutral

    print(pos_words, neg_words)
    ratio = sum(y) / len(y)
    if pos_words > neg_words:
        return ("Positive", ratio)
    elif pos_words < neg_words:
        return ("Negative", ratio)
    elif pos_words == neg_words:
        return ("Neutral", ratio)

def save_classifier(classifier):
    with open('article_sentiment_clsr.pickle', 'wb') as f:
        pickle.dump(classifier, f)
        f.close()

def load_classifier():
    f = open(SAVED_CLSR_LOC, 'rb')
    classifier = pickle.load(f)
    f.close()
    return classifier

def get_all_words(cleaned_tokens_list):
    for tokens in cleaned_tokens_list:
        for token in tokens:
            yield token

def get_tweets_for_model(cleaned_tokens_list):
    for tweet_tokens in cleaned_tokens_list:
        yield dict([token, True] for token in tweet_tokens)

def init_downloads():
    nltk.download('twitter_samples')
    nltk.download('stopwords')
    nltk.download('averaged_perceptron_tagger')
    nltk.download('wordnet')
    nltk.download('opinion_lexicon')
    nltk.download('vader_lexicon')

def train_twtr_classifier():
    if os.path.isfile(SAVED_CLSR_LOC):
        return load_classifier()

    positive_tweets = twitter_samples.strings('positive_tweets.json')
    negative_tweets = twitter_samples.strings('negative_tweets.json')
    text = twitter_samples.strings('tweets.20150430-223406.json')
    tweet_tokens = twitter_samples.tokenized('positive_tweets.json')[0]

    stop_words = stopwords.words('english')

    pos_twt_toks = twitter_samples.tokenized('positive_tweets.json')
    neg_twt_toks = twitter_samples.tokenized('negative_tweets.json')

    positive_cleaned_tokens_list = [remove_noise(toks, stop_words) for toks in pos_twt_toks]
    negative_cleaned_tokens_list = [remove_noise(toks, stop_words) for toks in neg_twt_toks]

    all_pos_words = get_all_words(positive_cleaned_tokens_list)

    freq_dist_pos = FreqDist(all_pos_words)
    print(freq_dist_pos.most_common(10))

    positive_tokens_for_model = get_tweets_for_model(positive_cleaned_tokens_list)
    negative_tokens_for_model = get_tweets_for_model(negative_cleaned_tokens_list)

    positive_dataset = [(tweet_dict, "Positive") for tweet_dict in positive_tokens_for_model]

    negative_dataset = [(tweet_dict, "Negative") for tweet_dict in negative_tokens_for_model]

    dataset = positive_dataset + negative_dataset

    random.shuffle(dataset)

    train_data = dataset[:7000]
    test_data = dataset[7000:]

    classifier = NaiveBayesClassifier.train(train_data)

    print("Accuracy is:", classify.accuracy(classifier, test_data))

    save_classifier(classifier)

    return classifier

def vader_sentiment(text):
    sentences = sent_tokenize(text)
    sia = SentimentIntensityAnalyzer()
    total_score = 0
    for sentence in sentences:
        print(sentence)
        ss = sia.polarity_scores(sentence)
        for k in sorted(ss):
            print('{0}: {1}, '.format(k, ss[k]), end='')
        total_score += ss["compound"]
    return total_score / len(sentences)

def stm2num(stm):
    stm_str = stm.lower()
    if stm_str == "positive":
        return 1
    elif  stm_str == "negative":
        return 0
    elif stm_str == "neutral":
        return stm_str == 0.5

class SentimentGleaner:
    def __init__(self, text):
        init_downloads()
        self.text = text
        custom_tokens = remove_noise(word_tokenize(text))
        
        # twitter based positivity classifier
        self.classifier = train_twtr_classifier()
        self.sm_stm = stm2num(self.classifier.classify(dict([token, True] for token in custom_tokens)))
        print(self.sm_stm)

        # pos_neg_count
        dlll_results = dlll_pos_neg_ratio(text)
        self.positivity_stm = 0.5 / (dlll_results[1] + 0.5)  
        print(self.positivity_stm)

        # Vader
        self.vader_stm = vader_sentiment(text)
        print(self.vader_stm)
        
        self.stms = [self.vader_stm, self.positivity_stm, self.sm_stm]
        self.overall_score = sum(self.stms) / len(self.stms)
    
    def get_scores(self):
        
        return {"sentiment and awareness reasoning score" : self.vader_stm, 
                "positivity and polarisation score" : self.positivity_stm,
                "social media rating" : self.sm_stm,
                "overall score" : self.overall_score}

    
if __name__ == "__main__":

    custom_tweet = "I ordered just once from TerribleCo, they screwed up, never used the app again."
    custom_tweet = "Ben and Jerries the great supports local workers and is flying on awesome initiatives"
    sg = SentimentGleaner(custom_tweet)
    print(sg.get_scores())

    