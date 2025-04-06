import industrialCImg from "../../../images/pages/projects/industrial-c.jpg"

export const PROJECTS_DATA: ProjectModel[] = [
    {
        name: "Язык Reflex",
        link: "reflex"
    },
    {
        name: "Язык poST",
        link: "post"
    },
    {
        name: "Язык IndustrialC",
        link: "industrial-c"
    },
    {
        name: "EDTL",
        link: "edtl"
    },
    {
        name: "Проект RIDE/THEIA",
        link: "ride"
    }
]

export const PROJECTS_IMAGES: {[index: string]: string} = {
    reflex: require("../../../images/pages/projects/reflex.jpg"),
    post: require("../../../images/pages/projects/post.jpg"),
    "industrial-c": require("../../../images/pages/projects/industrial-c.jpg"),
    edtl: require("../../../images/pages/projects/edtl.jpg"),
    ride: require("../../../images/pages/projects/ride.jpg")
}
