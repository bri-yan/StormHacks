from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import articles, certs
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

cache = {}

@app.route("/test")
@cross_origin()
def test():
  return {'test': 4}

@app.route('/articles/<search_terms>', defaults={'num_articles': 1})
@app.route('/articles/<search_terms>/<int:num_articles>')
def get_articles(search_terms, num_articles):
  if search_terms in cache:
    return cache[search_terms]
  pa = articles.ParsedArticles(*search_terms.split(","))
  info = pa.get_articles_info(num_art=num_articles)
  cache[search_terms] = info
  return info

@app.route("/certifications/<company>")
def certifications(company):
  crts = certs.Certifications(company)
  return crts.get_certs()

if __name__ == "__main__":
    app.run(debug=True)