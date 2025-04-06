import App from "../../../App";
import '../../../styles/pages/Home.scss';

export function Home(props: any) {
    return (
        App(page())
    )
}

function page() {
    return (
        <main>
            <div className="content">
                <div className="home">
                    <div className="text-block">
                        <h1>Процесс-ориентированное программирование – </h1>
                        <h2>эффективная технология разработки управляющих программ в виде набора взаимодействующих процессов</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
