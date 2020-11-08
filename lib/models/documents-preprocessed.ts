import { DocumentsModel } from './documents';

export interface DocumentsPreprocessedModel extends DocumentsModel {
    tokens?: string[];
    filters?: string[];
    unigrams?: string[];
    bigrams?: string[];
    trigrams?: string[];
    preprocessed?: string[];
};
