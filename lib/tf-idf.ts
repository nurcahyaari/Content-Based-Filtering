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

// (function() {
//     const documents: DocumentsPreprocessedModel[] = [
//         {
//             id: 1,
//             content: 'saham terbaik untuk saat ini saya perkirakan adalah saham BBCA',
//             preprocessed: [
//                 'saham',
//                 'baik',
//                 'kira',
//                 'saham',
//                 'bbca',
//                 'saham_baik',
//                 'saham_bbca'
//             ]
//         },
//         {
//             id: 2,
//             content: 'saham BBCA mengalami penaikan sebesar 10% pada tahun 2020 bulan januari',
//             preprocessed: [
//                 'saham',
//                 'bbca',
//                 'alami',
//                 'naik',
//                 'januari',
//                 'saham_bbca',
//                 'bbca_alami',
//                 'alami_naik',
//                 'saham_bbca_alami',
//                 'bbca_alami_naik'
//             ]
//         },
//         {
//             id: 3,
//             content: 'saat corona melanda indonesia sejumlah saham perusahaan di indonesia mengalami penurunan rata-rata hampir 50%',
//             preprocessed: [
//                 'corona',
//                 'landa',
//                 'indonesia',
//                 'saham',
//                 'usaha',
//                 'indonesia',
//                 'alami',
//                 'turun',
//                 'corona_landa',
//                 'landa_indonesia',
//                 'saham_usaha',
//                 'indonesia_alami',
//                 'alami_turun',
//                 'corona_landa_indonesia',
//                 'indonesia_alami_turun'
//             ]
//         },
//     ]
//     const preprocessed = TermFrequencyInverseDocumentFrequency(documents);

//     console.log(preprocessed);
// })()
