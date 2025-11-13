import {WorksFooterRow} from "../../../data/footer/WorksFooterRow";
import {ProjectsFooterRow} from "../../../data/footer/ProjectsFooterRow";
import {PublicationsFooterRow} from "../../../data/footer/PublicationsFooterRow";
import {FooterRow} from "./FooterRow";
import {FooterContactsRowView} from "./FooterContactsRowView";

export function Footer (props: any) {
    return (
        <footer>
            <FooterRow name = "Проекты" pathname="/projects" rowData = { new ProjectsFooterRow() }/>
            <FooterRow name = "Дипломные работы и диссертации" pathname="/works" rowData = { new WorksFooterRow() }/>
            <FooterRow name = "Публикации" pathname="/publications" rowData = { new PublicationsFooterRow() }/>
            <FooterContactsRowView/>
        </footer>
    )
}
