export interface CosineSimilarityModel {
    [key: string]: [
        id: number | string,
        score: number,
        data: any,
    ];
}
