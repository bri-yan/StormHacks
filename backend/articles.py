import nltk
import requests
from bs4 import BeautifulSoup
from purl import URL
from newspaper import Article
from googlesearch import search
import sentiment
import suggest, certs

WEB_SCHEME = "https"
GOOGLE = {'url':'www.google.com',
        'search_path':'/search'}

class ParsedArticles:
    def __init__(self, *args, url=None):
        """
        args -> search terms
        """
        self.urls = []
        if url:
            self.urls.append(url)
        if args:
            print(args)
            self.search_terms = args
            self.search()
        self.articles = []
    
    def search(self, start=None, stop=10):
        print(self.search_terms)
        search_str = "+".join(self.search_terms)
        results = search(search_str, stop=stop)
        for url in results:
            print(url)
            self.urls.append(url)

    def parse_articles(self, num_art=1):
        if num_art > len(self.urls):
            self.search(start=len(self.urls)-1, stop=num_art)
        for i in range(len(self.articles), num_art):
            article = Article(self.urls[i])
            self.articles.append(article)
            article.download()
            article.parse()
            nltk.download('punkt')
            article.nlp()
    
    def get_article(self):
        self.parse_articles()
        return self.articles[0]

    def get_articles(self, num_art=1):
        if num_art > len(self.articles):
            self.parse_articles(num_art)
        return self.articles

    def get_articles_info(self, num_art=1):
        self.parse_articles(num_art)
        ret_art_inf = []
        sum_txt = ""
        for a in self.articles:
            sum_txt += ". " + a.summary
            art_info = {"url": a.url, 
                        "title":a.title, 
                        "summary": a.summary[:310] + " ...", 
                        "img":a.top_image}
            art_info.copy()
            ret_art_inf.append(art_info)
        sg = sentiment.SentimentGleaner(sum_txt)
        ret_scr = sg.get_scores()

        #Demo Suggestions
        ret_sgst = None
        for term in self.search_terms:
            if "Ben" in term or "ben" in term:
                self.search_terms = [("Ben and Jerry's")]
                ret_sgst = suggest.suggest("Ben and Jerry's")
        if "Nike" in self.search_terms or "nike" in self.search_terms:
            ret_sgst = suggest.suggest("nike")

        print(self.search_terms)
        c = certs.Certifications(self.search_terms[0])
        ret_certs = c.get_certs()
        
        ret = {"articles": ret_art_inf, "scores": ret_scr, 
            "suggestions": ret_sgst, "certifications": ret_certs}

        return ret

        
if __name__ == '__main__':
    pa = ParsedArticles("Benasdfdsafdf3rry's", "fair trade")
    art = pa.get_article()
    print(art.summary)
    print(pa.get_articles_info())
