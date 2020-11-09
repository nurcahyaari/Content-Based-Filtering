import { CosineSimilarityModel } from './models/cosine-similarity';

const Recommendation = (id: number | string, similarity: CosineSimilarityModel) => {
    let similarDocuments = similarity[id];
    
    return similarDocuments;
}

export default Recommendation;
