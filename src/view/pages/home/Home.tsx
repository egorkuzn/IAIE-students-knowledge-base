import App from "../../../App";

export function Home(props: any) {
    return (
        App(page())
    )
}

function page() {
    return (
        <main>
            <div className="home">
            <h1>Процесс-ориентированное программирование – эффективная технология разработки управляющих программ в виде набора взаимодействующих процессов</h1>
            </div>
        </main>
    )
}
