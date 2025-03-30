import {WorkModel} from "./WorkModel";
import {FooterRawDataElement} from "../../footer/FooterRawDataElement";

export interface WorksClassModel extends FooterRawDataElement{
    title: string
    link: string
    works: WorkModel[]
}
