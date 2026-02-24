import type {FooterRawDataElement} from "../../footer/FooterRawDataElement";
import type {PublicationModel} from "./PublicationModel";

export abstract class PublicationClassModel implements FooterRawDataElement {
    abstract year: number
    abstract publications: PublicationModel[]

    get title(): string {
        return this.year.toString()
    }

    get hash() {
        return this.year.toString()
    }
}
