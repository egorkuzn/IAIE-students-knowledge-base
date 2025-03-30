import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";

export class ProjectsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            title: "Язык Reflex",
            link: "/projects#reflex"
        },
        {
            title: "Язык Post",
            link: "/projects#post"
        },
        {
            title: "Проект RIDE/Theia",
            link: "/projects#ride"
        },
        {
            title: "Язык IndustrialC",
            link: "/projects#industrial-c"
        },
        {
            title: "EDTL",
            link: "/projects#edtl"
        }
    ]
}
