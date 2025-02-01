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
        },
        {
            name: "Проект RIDE/Theia",
            link: "/projects/reflex"
        },
        {
            name: "Язык IndustrialC",
            link: "/projects/post"
        },
        {
            name: "EDTL",
            link: "/projects/post"
        }
    ]
}
