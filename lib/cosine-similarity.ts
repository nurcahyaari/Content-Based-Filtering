import { DocumentsPreprocessedModel } from './models/documents-preprocessed';
import { WordVectorModel } from './models/word-vector';
import { CosineSimilarityModel } from './models/cosine-similarity';

const CosineSimilarity = (WordVector: WordVectorModel[], minScore: number = 0): CosineSimilarityModel => {
    const document: any = {};
    
    for (const i in WordVector) {
        const data = WordVector[i];
        document[data.id] = [];
    }
    
    for (let i = 0; i < WordVector.length; i+=1) {
        for (let j = 0; j < i; j+=1) {
            const IdWordVectori = WordVector[i].id;
            const VectorWordVectori = WordVector[i].vector;
            const IdWordVectorj = WordVector[j].id;
            const VectorWordVectorj = WordVector[j].vector;
            const similarity = VectorWordVectori.getCosineSimilarity(VectorWordVectorj);
            const WordVectori = WordVector[i].data;
            const WordVectorj = WordVector[j].data;
            
            if (similarity >= minScore) {
                document[IdWordVectori].push({ id: IdWordVectorj, score: similarity, data : WordVectorj }); // push to document[i]
                document[IdWordVectorj].push({ id: IdWordVectori, score: similarity, data : WordVectori }); // push to document[j]
            }
        }
    }

    Object.keys(document).forEach((id) => {
        document[id].sort((a:any, b:any) => b.score - a.score);
    });

    return document;
}

export default CosineSimilarity;
