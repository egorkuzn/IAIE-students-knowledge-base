import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";

export class ProjectsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            name: "Язык Reflex",
            link: "/projects#reflex"
        },
        {
            name: "Язык Post",
            link: "/projects#post"
        },
        {
            name: "Проект RIDE/Theia",
            link: "/projects#ride"
        },
        {
            name: "Язык IndustrialC",
            link: "/projects#industrial-c"
        },
        {
            name: "EDTL",
            link: "/projects#edtl"
        }
    ]
}
