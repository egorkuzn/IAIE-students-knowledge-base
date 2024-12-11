import {MainFooterRow} from "../../model/footer/properties/MainFooterRow";
import {WorksFooterRow} from "../../model/footer/properties/WorksFooterRow";
import {DocsFooterRow} from "../../model/footer/properties/DocsFooterRow";
import {ProjectsFooterRow} from "../../model/footer/properties/ProjectsFooterRow";
import {PublicationsFooterRow} from "../../model/footer/properties/PublicationsFooterRow";
import {VideoFooterRow} from "../../model/footer/properties/VideoFooterRow";
import {FooterRow} from "./FooterRow";

export function Footer (props: any) {
    return (
        <footer>
            <FooterRow name = "Главная" rowData ={ new MainFooterRow() }/>
            <FooterRow name = "Дипломные работы и диссертации" rowData = { new WorksFooterRow() }/>
            <FooterRow name = "Документация и инструкции" rowData = { new DocsFooterRow() }/>
            <FooterRow name = "Проекты" rowData = { new ProjectsFooterRow() }/>
            <FooterRow name = "Публикации" rowData = { new PublicationsFooterRow() }/>
            <FooterRow name = "Видео" rowData = { new VideoFooterRow() }/>
        </footer>
    )
}
