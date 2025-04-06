import {WorksView} from "../view/pages/works/WorksView";
import {ProjectsView} from "../view/pages/projects/ProjectsView";
import {VideoView} from "../view/pages/video/VideoView";
import {PublicationsView} from "../view/pages/publications/PublicationsView";
import {DocsView} from "../view/pages/docs/DocsView";
import {Home} from "../view/pages/home/Home";
import {createBrowserRouter, Navigate, replace} from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/home",
        Component: Home
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
    },
    {
        path: "*",
        Component: () => {
            window.location.href = "https://www.iae.nsk.su/ru/laboratory-sites/lab-19"
            return null
        }
    }
]);
