import App from "../../../App";

export function DocsView(props: any) {
    return (App(page()))
}

function page() {
    return (
        <main>
            <h1>Docs View</h1>
        </main>
    )
}