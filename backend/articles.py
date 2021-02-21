import nltk
import requests
from bs4 import BeautifulSoup
from purl import URL
from newspaper import Article
from googlesearch import search

WEB_SCHEME = "https"
GOOGLE = {'url':'www.google.com',
        'search_path':'/search'}
# desktop user-agent
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"
# mobile user-agent
MOBILE_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36"

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
            # nltk.download('punkt')
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
        ret_inf = []
        for a in self.articles:
            art_info = {"url": a.url, "title":a.title, "summary": a.summary, "img":a.top_image}
            art_info.copy()
            ret_inf.append(art_info)
        return ret_inf

        
if __name__ == '__main__':
    pa = ParsedArticles("nike", "fair trade")
    art = pa.get_article()
    print(art.summary)
