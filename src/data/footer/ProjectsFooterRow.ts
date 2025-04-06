import {FooterRawData} from "../../model/footer/FooterRawData";
import {FooterRawDataElement} from "../../model/footer/FooterRawDataElement";

export class ProjectsFooterRow implements FooterRawData {
    data: FooterRawDataElement[] = [
        {
            title: "Язык Reflex",
            hash: "reflex"
        },
        {
            title: "Язык Post",
            hash: "post"
        },
        {
            title: "Проект RIDE/Theia",
            hash: "ride"
        },
        {
            title: "Язык IndustrialC",
            hash: "industrial-c"
        },
        {
            title: "EDTL",
            hash: "edtl"
        }
    ]
}
