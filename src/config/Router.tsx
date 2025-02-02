import { createBrowserRouter } from "react-router";
import App from "../App";
import {WorksView} from "../view/works/WorksView";
import {ProjectsView} from "../view/projects/ProjectsView";
import {VideoView} from "../view/video/VideoView";
import {PublicationsView} from "../view/publications/PublicationsView";
import {DocsView} from "../view/docs/DocsView";

export const router = createBrowserRouter([
    {
        path: "/home",
        Component: App
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
