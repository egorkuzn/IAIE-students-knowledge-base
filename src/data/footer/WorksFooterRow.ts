import type {FooterRawData} from "../../model/footer/FooterRawData";
import type {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";
import {WORKS_DATA} from "../pages/works/WorksClassesProperties";

export class WorksFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = WORKS_DATA
}
