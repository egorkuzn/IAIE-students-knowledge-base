import {FooterRawData} from "../FooterRawData";
import {FooterRawDataElement} from "../FooterRawDataElement";

export class WorksFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            name: "Язык Reflex",
            link: "/works/reflex"
        },
        {
            name: "Язык Post",
            link: "/works/post"
        }
    ]
}
