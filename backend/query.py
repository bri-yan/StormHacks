import os
import spacy
from spacy import displacy
from collections import Counter
from nltk.chunk import conlltags2tree, tree2conlltags
import nltk
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
if spacy.util.is_package("en_core_web_trf"):
    print("Hello")
else: 
    os.system("python -m spacy download en_core_web_trf")

def preprocess(sent):
    sent = nltk.word_tokenize(sent)
    sent = nltk.pos_tag(sent)
    return sent

def org_prod_parse_query(txt):
    import en_core_web_sm
    nlp = en_core_web_sm.load()
    
    doc = nlp(txt)
    
    sent = preprocess(txt)
    pattern = 'NP: {<DT>?<JJ>*<NN>}'
    cp = nltk.RegexpParser(pattern)
    cs = cp.parse(sent)
    iob_tagged = tree2conlltags(cs)
    print(iob_tagged)

    found_tags = {}
    prod_cache = []
    for text, cat, pos in iob_tagged:
        if cat.lower()  in ['nn', 'nns', 'nnp', 'nnps']:
            prod_cache.append(text)
        else:
            if prod_cache:
                pos_prod = " ".join(prod_cache)
                found_tags[pos_prod] = "POSPROD"
                prod_cache.clear()
    if prod_cache:
        pos_prod = " ".join(prod_cache)
        found_tags[pos_prod] = "POSPROD"

    for text, det in [(X.text, X.label_) for X in doc.ents]:
        if det.lower() in ["org", "product"]:
            found_tags[text] = det
    print(found_tags)
    return found_tags
    

def search_alts():
    pass


# txt = 'Ben and Jerries ice cream'
# org_prod_parse_query(txt)