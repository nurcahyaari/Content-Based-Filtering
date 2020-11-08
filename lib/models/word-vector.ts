import { DocumentsModel } from './documents';

export interface WordVectorModel {
    id: number | string;
    vector: any;
    data: DocumentsModel;
}
