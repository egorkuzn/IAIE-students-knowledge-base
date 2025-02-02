import React, {JSX} from 'react';
import './styles/Navbar.scss';
import './styles/Footer.scss';
import './styles/Main.scss';
import {Navbar} from './view/common/navbar/Navbar';
import {Footer} from "./view/common/footer/Footer";

function App(page: JSX.Element) {
    return (
        <div className="App">
            <Navbar/>
            {page}
            <Footer/>
        </div>
    );
}

export default App;
