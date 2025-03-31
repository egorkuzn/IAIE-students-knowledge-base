import {Component} from "react";
import {PROJECTS_DATA} from "../../../data/pages/projects/ProjectsProperties";
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
                {PROJECTS_DATA.map((it) => {
                    let isActive = this.state.activeElem === it.name

                    return (<ProjectsListElem
                        isActive={isActive}
                        name={it.name}
                        link={it.link}
                    />)
                })}
            </div>
        );
    }
}