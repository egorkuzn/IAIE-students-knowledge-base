import {Component} from "react";
import {projectsList} from "../../../model/pages/projects/ProjectsProperties";
import {ProjectsListElem} from "./ProjectsListElem";
import {ProjectsListViewState} from "../../../model/pages/projects/ProjectsListViewState";

export class ProjectsListView extends Component<any, ProjectsListViewState> {
    render() {
        return (
            <div>
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