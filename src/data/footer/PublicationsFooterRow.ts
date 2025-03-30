import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";
import {PUBLICATIONS_DATA} from "../pages/publications/PublicationsClassProperties";

export class PublicationsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = PUBLICATIONS_DATA
}
