import requests
from bs4 import BeautifulSoup
from purl import URL
from unidecode import unidecode

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
}

WEB_SCHEME = "https"
CERT_ORGS = {"fair trade federation" : 
            {"url" : "www.fairtradefederation.org",
            "search_path": "/members-search-results"},
            "SPP":
            {"url" : "spp.coop",
            "search_path" : "/where-to-buy/?lang=en"}}

class Certifications:
    def __init__(self, company_name):
        self.company_name = company_name
        self.certifications = {}
        self.certifications["fair trade federation"] = self.search_fair_trade_federation()
        self.certifications["SPP, Small Producers' Symbol"] = self.search_spp()
        #Demo for Hidden Cert Database
        if company_name not in ['Nike', 'nike']:
            self.certifications["FairTade"] = True
            self.certifications["World Fair Trade Organization"] = True

    def search_spp(self):
        org_info = CERT_ORGS["SPP"]
        url = URL(scheme = WEB_SCHEME, 
                    host = org_info["url"], 
                    path = org_info["search_path"])
        print(url)
        source = requests.get(url, headers=HEADERS)
        page = BeautifulSoup(source.content, 'html.parser')
        search_results = page.find_all(class_='slide-entry')
        for sr in search_results:
            result_name = sr.get('data-avia-tooltip')
            if self.is_company(result_name):
                return True
        return False

    def search_fair_trade_federation(self):
        org_info = CERT_ORGS["fair trade federation"]
        url = URL(scheme = WEB_SCHEME, 
                    host = org_info["url"], 
                    path = org_info["search_path"], 
                    query = f"members_search={self.company_name}")
        source = requests.get(url)
        page = BeautifulSoup(source.content, 'html.parser')
        search_results = page.find_all(class_='members-box')
        for sr in search_results:
            result_name = sr.mark.text
            # print(sr.h3.text)
            if self.is_company(result_name):
                return True
        return False
    
    def get_certs(self): 
        return self.certifications.copy()

    def is_company(self, co):
        return unidecode(co).lower() == unidecode(self.company_name).lower()

if __name__ == '__main__':
    # cert = Certifications("Gallant International")
    # print(cert.get_certs())
    cert = Certifications("Ben")
    print(cert.get_certs())