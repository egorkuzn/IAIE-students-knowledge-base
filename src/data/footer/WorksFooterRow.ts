import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";
import {WORKS_DATA} from "../pages/works/WorksClassesProperties";

export class WorksFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = WORKS_DATA
}
