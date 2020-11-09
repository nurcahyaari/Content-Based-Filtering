export interface CosineSimilarityValueModel {
    id: number | string;
    score: number;
    data?: any;
}

export interface CosineSimilarityModel {
    [key: string]: CosineSimilarityValueModel[];
}
