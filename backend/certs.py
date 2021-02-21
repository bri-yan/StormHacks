import requests
from bs4 import BeautifulSoup
from purl import URL

WEB_SCHEME = "https"
CERT_ORGS = {"fair trade federation" : 
            {"url" : "www.fairtradefederation.org",
            "search_path": "/members-search-results"}}

class Certifications:
    def __init__(self, company_name):
        self.company_name = company_name
        self.certifications = []
        if self.search_fair_trade_federation():
            self.certifications.append("fair trade federation")

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