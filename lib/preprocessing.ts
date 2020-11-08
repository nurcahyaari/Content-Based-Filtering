import { NGrams } from 'natural';
import Tokenize from './tokenize';
import Stopword from './stopword';
import Stemming from './stemming';
import { DocumentsModel } from './models/documents';
import { DocumentsPreprocessedModel } from './models/documents-preprocessed';

/**
 * PreprocessedDocuments is a function for doing preprocessing task.
 * Tokenization, Filtering/ Stopword Removal, Stemming, and N-Grams
 * @param documents 
 */
const PreprocessedDocuments = (documents: DocumentsModel[]): DocumentsPreprocessedModel[] => {
    if (documents.length === 0) {
        throw new Error('Documents cannot be empty');
    }

    const preprocessing = documents.map((item): DocumentsPreprocessedModel => {
        const token = Tokenize(item.content);
        const filter = Stopword(token);

        const unigram = filter.map(text => Stemming(text));

        // get bigrams
        const bigram: string[] = NGrams.bigrams(token)
            .filter((bigram: string[]) =>
            // filter terms with stopword
            (bigram.length === Stopword(bigram).length))
            .map((bigram: string[]) =>
            // stem the tokens
            bigram.map((token: string) => Stemming(token)).join('_'));

        // get trigrams
        const trigram: string[] = NGrams.trigrams(token)
            .filter((trigram: string[]) =>
            // filter terms with stopword
            (trigram.length === Stopword(trigram).length))
            .map((trigram: string[]) =>
            // stem the tokens
            trigram.map((token: string) => Stemming(token)).join('_'));

        const preprocessed = [...unigram, ...bigram, ...trigram];

        return {
            id: item.id,
            content: item.content,
            data: item.data,
            tokens: token,
            filters: filter,
            unigrams: unigram,
            bigrams: bigram,
            trigrams: trigram,
            preprocessed,
        }
    });

    return preprocessing;
}

export default PreprocessedDocuments;
