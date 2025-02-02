import React from 'react';
import './styles/Navbar.scss';
import './styles/Footer.scss';
import './styles/Main.scss';
import {Navbar} from './view/common/navbar/Navbar';
import {Main} from './view/common/Main';
import {Footer} from "./view/common/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
