import {Component} from "react";
import {ProjectsListElemProp} from "../../../model/pages/projects/ProjectsListElemProp";
import {Link} from "react-router";
import {ProjectsListElemState} from "../../../model/pages/projects/ProjectsListElemState";
import {PROJECTS_IMAGES} from "../../../data/pages/projects/ProjectsProperties";

export class ProjectsListElem extends Component<ProjectsListElemProp, ProjectsListElemState> {
    render() {
        return (
            <Link to={{pathname: this.props.link}}>
                <div className="projects-list-elem">
                <h1
                    onMouseEnter={(_) => { this.props.onChange(true)}}
                    onMouseOut={(_) => { this.props.onChange(false)}}
                    >
                    {this.props.name}</h1>
                <img
                     src={ PROJECTS_IMAGES[this.props.link] }
                     alt={this.props.link}
                />
                </div>
            </Link>
        );
    }
}