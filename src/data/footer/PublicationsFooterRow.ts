import type {FooterRawData} from "../../model/footer/FooterRawData";
import type {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";
import {PUBLICATIONS_DATA} from "../pages/publications/PublicationsClassProperties";

export class PublicationsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = PUBLICATIONS_DATA
}
