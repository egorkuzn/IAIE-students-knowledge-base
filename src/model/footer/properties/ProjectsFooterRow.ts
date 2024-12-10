import {FooterRawData} from "../FooterRawData";
import {FooterRawDataElement} from "../FooterRawDataElement";

export class ProjectsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            name: "Язык Reflex",
            link: "/projects/reflex"
        },
        {
            name: "Язык Post",
            link: "/projects/post"
        }
    ]
}
