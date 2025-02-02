import React, {JSX} from 'react';
import './styles/common/Navbar.scss';
import './styles/common/Footer.scss';
import './styles/common/Main.scss';
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
