import {Component} from "react";
import {ProjectsListElemProp} from "../../../model/pages/projects/ProjectsListElemProp";
import {Link} from "react-router";

export class ProjectsListElem extends Component<ProjectsListElemProp> {
    render() {
        return (
            <Link
                to={{pathname: this.props.link}}
            >
                <h2> {this.props.name}</h2>
            </Link>
        );
    }
}