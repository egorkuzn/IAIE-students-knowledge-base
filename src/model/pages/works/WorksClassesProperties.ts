import {WorksClassModel} from "./WorksClassModel";
import {WorkModel} from "./WorkModel";

export class ReflexWorksClass implements WorksClassModel {
    get title(): string {
        return this._title
    }
    get works(): WorkModel[] {
        return this._works
    }

    private _title = "Язык Reflex"
    private _works: WorkModel[] = [
        {
            authors: "",
            theme: "",
            published: ""
        }
    ]
}

export class VerificationAndDebugPOPWorksClass implements WorksClassModel {
    get title(): string {
        return this._title
    }
    get works(): WorkModel[] {
        return this._works
    }

    private _title = "Верификация и отладка процесс-ориентированных программ"
    private _works: WorkModel[] = [
        {
            authors: "",
            theme: "",
            published: ""
        }
    ]
}
