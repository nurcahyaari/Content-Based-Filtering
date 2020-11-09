import { CosineSimilarityModel, CosineSimilarityValueModel } from './models/cosine-similarity';

const Recommendation = (id: number | string, similarity: CosineSimilarityModel): CosineSimilarityValueModel[] => {
    let similarDocuments = similarity[id];
    
    return similarDocuments;
}

export default Recommendation;
