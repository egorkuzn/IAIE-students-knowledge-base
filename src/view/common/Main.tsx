import App from "../../App";

export function Main(props: any) {
    return (
        App(page())
    )
}

function page() {
    return (
        <main>
            <h1>Main View</h1>
        </main>
    )
}
