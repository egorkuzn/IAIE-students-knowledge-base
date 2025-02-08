import App from "../../../App";
import {WorksClassModel} from "../../../model/pages/works/WorksClassModel";
import {ReflexWorksClass, VerificationAndDebugPOPWorksClass} from "../../../model/pages/works/WorksClassesProperties";
import {WorkModel} from "../../../model/pages/works/WorkModel";
import '../../../styles/pages/Works.scss';

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
            <div className="works-page">
                <h1 className="works-style">Дипломные работы и диссертации</h1>
                { worksClasses.map((worksClassModel: WorksClassModel) => {
                    return (
                        <div className="works-class">
                            <h2 className="works-style">{worksClassModel.title}</h2>
                            {worksClassModel.works.map((workModel: WorkModel) => {
                                return (
                                    <div className="work">
                                        <div className="work-authors-titles">
                                            <p>{workModel.authors}</p>
                                            <p>{workModel.theme}</p>
                                        </div>
                                        <p className="work-published">{workModel.published}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }) }
            </div>
        </main>
    )
}
