const Vector = require('vector-object');
import { TfIdf } from 'natural';
import { DocumentsPreprocessedModel } from './models/documents-preprocessed';
import { WordVectorModel } from './models/word-vector';

const WordVector = (documents: DocumentsPreprocessedModel[]): WordVectorModel[] => {
    const tfidf = new TfIdf();
    for (const document of documents) {
        if (typeof document?.preprocessed !== 'undefined') {
            tfidf.addDocument(document?.preprocessed);
        } else {
            tfidf.addDocument(document.content);
        }
    }

    const WordVectorDocument: WordVectorModel[] = [];

    for (const i in documents) {
        const hash: any = {};
        const listTerms: any = tfidf.listTerms(parseInt(i, 10));

        for (const j in listTerms) {
            hash[listTerms[j].term] = listTerms[j].tfidf;
        }
        
        WordVectorDocument.push({
            id: documents[i].id,
            vector: new Vector(hash),
            data: documents[i].data,
        });
    }

    return WordVectorDocument;
}

export default WordVector;
