import { createBrowserRouter } from "react-router";
import App from "../App";
import {WorksView} from "../view/works/WorksView";
import {ProjectsView} from "../view/projects/ProjectsView";
import {VideoView} from "../view/video/VideoView";
import {PublicationsView} from "../view/publications/PublicationsView";
import {DocsView} from "../view/docs/DocsView";
import {Main} from "../view/common/Main";

export const router = createBrowserRouter([
    {
        path: "/home",
        Component: Main
    },
    {
        path: "/works",
        Component: WorksView
    },
    {
        path: "/docs",
        Component: DocsView
    },
    {
        path: "/projects",
        Component: ProjectsView
    },
    {
        path: "/publications",
        Component: PublicationsView
    },
    {
        path: "/video",
        Component: VideoView
    }
]);
