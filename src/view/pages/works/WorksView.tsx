import App from "../../../App";
import {WorksClassModel} from "../../../model/pages/works/WorksClassModel";
import {WORKS_DATA} from "../../../data/pages/works/WorksClassesProperties";
import {WorkModel} from "../../../model/pages/works/WorkModel";
import '../../../styles/pages/Works.scss';

export function WorksView(props: any) {
    return (App(page()))
}

function page() {
    return (
        <main>
            <div className="works-page">
                <h1>Дипломные работы и диссертации</h1>
                {WORKS_DATA.map((worksClassModel: WorksClassModel) => {
                    return (
                        <div className="works-class">
                            <h2>{worksClassModel.title}</h2>
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
                })}
            </div>
        </main>
    )
}
