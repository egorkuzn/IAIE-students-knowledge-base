import {Component} from "react";
import {ProjectsListElemProp} from "../../../model/pages/projects/ProjectsListElemProp";

export class ProjectsListElem extends Component<ProjectsListElemProp> {
    render() {
        let style = ""

        if (this.props.isActive) style = "other"

        return (
            <div className={style}>
                {this.props.name}
            </div>
        );
    }
}