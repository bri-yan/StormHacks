# import requests
# import query

# def categorize():
#     url = "https://product-categorization.p.rapidapi.com/categorized"

#     querystring = {"title":"nestle coffee"}

#     headers = {
#         'x-rapidapi-key': "aad635969dmsh678c6b6721ab12cp14588bjsn4f394e0a0116",
#         'x-rapidapi-host': "product-categorization.p.rapidapi.com"
#         }

#     response = requests.request("GET", url, headers=headers, params=querystring)

#     print(response.text)

def suggest(text):
    # query.org_prod_parse_query()
    alternatives = None
    # TODO: scrape web for suggestions based 
    if text == 'nike':
        alternatives = [
        {
            "title": "Kusaga Athletic",
            "link" : "https://www.kusagaathletic.com/",
            "img" : "https://cdn.shopify.com/s/files/1/2143/7011/files/kusaga.jpg?v=1583186981",
        },
        {
            "title": "Patagonia",
            "link" : "https://www.patagonia.com",
            "img" : "https://cdn.shopify.com/s/files/1/2143/7011/files/fitsum-admasu-oGv9xIl7DkY-unsplash.jpg?v=1583186866",
        },
        {
            "title": "Yoga Democracy",
            "link" : "https://yogademocracy.com/",
            "img" : "https://cdn.shopify.com/s/files/1/2143/7011/files/yogadem.jpg?v=1583186918",
        },{
            "title": "CotoPaxi",
            "link" : "https://www.cotopaxi.com/",
            "img" : "https://cdn.shopify.com/s/files/1/2143/7011/files/cot.jpg?v=1583186891",
        }
        ]

    if text == "Ben and Jerry's":
        print("HIHI")
        alternatives = [
        {
            "title": "This Company is Ethical! Stick with Them!",
            "link" : "https://www.benjerry.com/values/issues-we-care-about/fairtrade",
            "img" : "https://images.app.goo.gl/eqPfcvo3e2ZKb3w57",
        }    
        ]
    return alternatives

