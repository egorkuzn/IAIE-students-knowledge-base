import React from 'react';
import './styles/Navbar.scss';
import './styles/Footer.scss';
import './styles/Main.scss';
import {Navbar} from './view/navbar/Navbar';
import {Main} from './view/Main';
import {Footer} from "./view/footer/Footer";

function App() {
    let path = window.location.pathname

    return (
        <div className="App">
            <Navbar currentPath = {path}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
