import sys
import numpy as np

from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import TfidfVectorizer

from sklearn.metrics.pairwise import cosine_similarity

count_vect = CountVectorizer()

def process(pages):
    y = np.array(pages)
    
    # Convert to Pandas DF (which uses numpy internally) to allow constructing of stat models more easily.
    print("Converted to Pandas DF")
    
    #TFIDF converts the text string into mathematical vectors to make checking distance and similarily. (Check full
    #link on discord.)
    
    #https://newscatcherapi.com/blog/ultimate-guide-to-text-similarity-with-python
    
    text_clf = Pipeline([
        ('tfidf', TfidfVectorizer()),
    ])

    test = text_clf.fit_transform(y)
    res = cosine_similarity(test.toarray())
    
    # Use cosine similarity to determine how similar passages are to each other and output a p-value.
    # Also why am I doing math?!!!
    
    np.fill_diagonal(res, 0) #Remove all duplicate matches with itself. IMPORTANT as we don't want to output false
    # p-value due to it matching itself.
    matchvtr = np.argmax(res, axis=1);
    matchprobs = np.max(res, axis=1);
    print(res)
    print(matchvtr)

def main(in_directory, out_directory):
    
    text1 = open(in_directory, "r").read()
    text2 = open(out_directory, "r").read()
    
    pages = [text1, text2]
    process(pages);
    #pages.show()

if __name__=='__main__':
    in_directory = sys.argv[1]
    out_directory = sys.argv[2]
    main(in_directory, out_directory)
