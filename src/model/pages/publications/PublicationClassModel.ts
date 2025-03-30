import {FooterRawDataElement} from "../../footer/FooterRawDataElement";

export abstract class PublicationClassModel implements FooterRawDataElement {
    abstract year: number
    abstract publications: PublicationModel[]

    get title(): string {
        return this.year.toString()
    }

    get link() {
        return `/publications#${this.year.toString()}`
    }
}
