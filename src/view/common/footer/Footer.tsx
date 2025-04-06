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
            <FooterRow name = "Главная" pathname="/home" rowData ={ new MainFooterRow() }/>
            <FooterRow name = "Дипломные работы и диссертации" pathname="/works" rowData = { new WorksFooterRow() }/>
            <FooterRow name = "Документация и инструкции" pathname="/docs" rowData = { new DocsFooterRow() }/>
            <FooterRow name = "Проекты" pathname="/projects" rowData = { new ProjectsFooterRow() }/>
            <FooterRow name = "Публикации" pathname="/publications" rowData = { new PublicationsFooterRow() }/>
            <FooterRow name = "Видео" pathname="/video" rowData = { new VideoFooterRow() }/>
        </footer>
    )
}
