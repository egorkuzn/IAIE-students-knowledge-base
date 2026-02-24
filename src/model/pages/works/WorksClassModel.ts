import type {WorkModel} from "./WorkModel";
import type {FooterRawDataElement} from "../../footer/FooterRawDataElement";

export interface WorksClassModel extends FooterRawDataElement{
    title: string
    hash: string
    works: WorkModel[]
}
