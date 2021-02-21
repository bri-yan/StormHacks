from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import articles
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/test")
@cross_origin()
def test():
  return {'test': 4}

@app.route('/articles/<search_terms>', defaults={'num_articles': 1})
@app.route('/articles/<search_terms>/<int:num_articles>')
def get_articles(search_terms, num_articles):
  pa = articles.ParsedArticles(*search_terms.split(","))
  arts = pa.get_articles_info(num_art=num_articles)
  print(arts)
  return jsonify(arts)

if __name__ == "__main__":
    app.run(debug=True)