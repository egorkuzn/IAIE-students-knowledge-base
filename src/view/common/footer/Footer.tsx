import {MainFooterRow} from "../../../data/footer/MainFooterRow";
import {WorksFooterRow} from "../../../data/footer/WorksFooterRow";
import {DocsFooterRow} from "../../../data/footer/DocsFooterRow";
import {ProjectsFooterRow} from "../../../data/footer/ProjectsFooterRow";
import {PublicationsFooterRow} from "../../../data/footer/PublicationsFooterRow";
import {VideoFooterRow} from "../../../data/footer/VideoFooterRow";
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
