import {Component} from "react";
import {ProjectsListElemProp} from "../../../model/pages/projects/ProjectsListElemProp";

export class ProjectsListElem extends Component<ProjectsListElemProp> {
    render() {
        return (
            <a
                href={this.props.link}
            >
                <h2> {this.props.name}</h2>
            </a>
        );
    }
}