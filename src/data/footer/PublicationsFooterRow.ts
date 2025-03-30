import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";

export class PublicationsFooterRow implements FooterRawData {
    private currentYear = new Date().getFullYear()

    data: FooterRawDataElement[] = Array.from({length: (this.currentYear - 2018)}, (v, k) =>  this.currentYear - k).map( it => {
            return {
                name: it.toString(),
                link: "/publications#" + it.toString()
            }
        }
    )
}
