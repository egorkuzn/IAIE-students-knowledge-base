import App from "../../../App";
import '../../../styles/pages/Home.scss';
import React from 'react';
import RotatingText from './components/RotatingText';

export function Home(props: any) {
    return (
        App(Page())
    )
}

function Page() {
    return (
        <main>
            <div className="content">
                <div className="home">
                    <RotatingText/>
                </div>
            </div>
        </main>
    )
}
