import {Component, ReactElement} from "react";
import {ProjectsListView} from "./ProjectsListView";

export class ProjectsViewBlock extends Component<{}, ProjectViewBlockState> {
    state: ProjectViewBlockState = {
        id: "reflex"
    }

    render(): ReactElement {
        return(

                <ProjectsListView onChange={
                    (newState) => {
                        console.log(newState.activeElem)
                        this.setState({id: newState.activeElem}
                        )}}
                    initialState={this.state.id}
                />
        )
    }
}
