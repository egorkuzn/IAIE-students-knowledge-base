import React, {Component} from "react";
import {ProjectsListElemProp} from "../../../model/pages/projects/ProjectsListElemProp";
import {Link} from "react-router";
import {ProjectsListElemState} from "../../../model/pages/projects/ProjectsListElemState";
import {PROJECTS_IMAGES} from "../../../data/pages/projects/ProjectsProperties";

export class ProjectsListElem extends Component<ProjectsListElemProp, ProjectsListElemState> {
    render() {
        return (
            <Link to={{pathname: this.props.link}}>
                <div className="projects-list-elem">
                    <div className="projects-list-elem-image" style={{backgroundImage: `url(${PROJECTS_IMAGES[this.props.link]})`}}></div>
                    <div> {this.props.name}</div>
                </div>
            </Link>
        );
    }
}