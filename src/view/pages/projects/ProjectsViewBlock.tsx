import {Component, ReactElement} from "react";
import {ProjectsListView} from "./ProjectsListView";
import {ProjectsPreviewCarousel} from "./ProjectsPreviewCarousel";

export class ProjectsViewBlock extends Component<{}, ProjectViewBlockState> {
    state: ProjectViewBlockState = {
        id: ""
    }

    render(): ReactElement {
        return(
            <div>
                <ProjectsListView/>
                <ProjectsPreviewCarousel/>
            </div>
        )
    }
}
