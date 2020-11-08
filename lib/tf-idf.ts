import { TfIdf } from 'natural';
import { DocumentsPreprocessedModel } from './models/documents-preprocessed';
import { TfIdfModel } from './models/tf-idf';

const TermFrequencyInverseDocumentFrequency = (documents: DocumentsPreprocessedModel[], query: string = ''): TfIdfModel[][] => {
    if (documents.length === 0) {
        throw new Error('Document cannot be empty');
    }
    const tfidf = new TfIdf();
    
    for (const document of documents) {
        if (typeof document?.preprocessed !== 'undefined') {
            tfidf.addDocument(document?.preprocessed);
        } else {
            tfidf.addDocument(document.content);
        }
    }

    /**
     * if query is empty string the tf idf value will calculate
     * from all of documents
     */
    const tfidfValue: TfIdfModel[][] = [];
    if (query === '') {
        for (const i in documents) {
            const listTerm = tfidf.listTerms(parseInt(i, 10));
            
            tfidfValue.push(listTerm.map((item: any) => ({
                term: item.term,
                tf: item.tf,
                idf: item.idf,
                tfidf: item.tfidf,
            })));
        }
    }

    return tfidfValue;
}

export default TermFrequencyInverseDocumentFrequency;
