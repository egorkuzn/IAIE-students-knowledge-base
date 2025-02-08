import App from "../../../App";
import {WorksClassModel} from "../../../model/pages/works/WorksClassModel";
import {ReflexWorksClass, VerificationAndDebugPOPWorksClass} from "../../../model/pages/works/WorksClassesProperties";
import {WorkModel} from "../../../model/pages/works/WorkModel";

export function WorksView(props: any) {
    return (App(page()))
}

function page() {
    let worksClasses: WorksClassModel[] = [
        new ReflexWorksClass(),
        new VerificationAndDebugPOPWorksClass()
    ]

    return (
        <main>
            <h1>Дипломные работы и диссертации</h1>
            { worksClasses.map((worksClassModel: WorksClassModel) => {
                return (
                    <div>
                        <h2>{worksClassModel.title}</h2>
                        {worksClassModel.works.map((workModel: WorkModel) => {
                            return (
                                <div>
                                    <p>{workModel.authors}</p>
                                    <p>{workModel.theme}</p>
                                    <p>{workModel.published}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            }) }
        </main>
    )
}
