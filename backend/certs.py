import requests
from bs4 import BeautifulSoup
from purl import URL

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
        self.certifications["SPP, Small Producers' Symbol"] = self.search_spp

    def search_spp(self):
        org_info = CERT_ORGS["SPP"]
        url = URL(scheme = WEB_SCHEME, 
                    host = org_info["url"], 
                    path = org_info["search_path"])
        print(url)
        source = requests.get(url)
        page = BeautifulSoup(source.content, 'html.parser')
        search_results = page.find_all(class_='slide-entry')
        print(search_results)
        for sr in search_results:
            print(sr.prettify())

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
            result_names = sr.mark.text
            # print(sr.h3.text)
            if result_names == self.company_name:
                return True
        return False
    
    def get_certs(self): 
        return self.certifications

cert = Certifications("Gallant International")
print(cert.get_certs())