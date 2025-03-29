import {Component} from "react";
import {projectsList} from "../../../model/pages/projects/ProjectsProperties";
import {ProjectsListElem} from "./ProjectsListElem";
import {ProjectsListViewState} from "../../../model/pages/projects/ProjectsListViewState";
import '../../../styles/pages/Projects.scss';

export class ProjectsListView extends Component<any, ProjectsListViewState> {
    state: ProjectsListViewState = {
        activeElem: ""
    }

    render() {
        return (
            <div className="projects-list">
                {projectsList.map((it) => {
                    let isActive = this.state.activeElem === it

                    return (<ProjectsListElem
                        isActive={isActive}
                        name={it}
                        link={it}
                    />)
                })}
            </div>
        );
    }
}