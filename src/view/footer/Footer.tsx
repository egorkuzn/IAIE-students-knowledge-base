import {MainFooterRow} from "../../model/footer/properties/MainFooterRow";
import {WorksFooterRow} from "../../model/footer/properties/WorksFooterRow";
import {DocsFooterRow} from "../../model/footer/properties/DocsFooterRow";
import {ProjectsFooterRow} from "../../model/footer/properties/ProjectsFooterRow";
import {PublicationsFooterRow} from "../../model/footer/properties/PublicationsFooterRow";
import {VideoFooterRow} from "../../model/footer/properties/VideoFooterRow";
import {FooterRow} from "./FooterRow";

export function Footer (props: any) {
    return (
        <div>
            <FooterRow name = "Главная" rowData ={ MainFooterRow() }/>
            <FooterRow name = "Дипломные работы и диссертации" rowData = { WorksFooterRow() }/>
            <FooterRow name = "Документация и инструкции" rowData = { DocsFooterRow() }/>
            <FooterRow name = "Проекты" rowData = { ProjectsFooterRow() }/>
            <FooterRow name = "Публикации" rowData = { PublicationsFooterRow() }/>
            <FooterRow name = "Видео" rowData = { VideoFooterRow() }/>
        </div>
    )
}
