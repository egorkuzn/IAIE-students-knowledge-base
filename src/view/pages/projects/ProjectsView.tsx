import App from "../../../App";
import {ProjectsViewBlock} from "./ProjectsViewBlock";

export function ProjectsView(props: any) {
    return (App(page()))
}

function page() {
    return (
        <main>
            <h1>Проекты</h1>
            <ProjectsViewBlock/>
        </main>
    )
}
