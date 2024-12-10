import React from 'react';
import './styles/Navbar.scss';
import {Navbar} from './view/navbar/Navbar';
import {Body} from './view/Body';
import {Footer} from './view/footer/Footer';

function App() {
    let path = window.location.pathname

    return (
        <div className="App">
            <Navbar currentPath = {path}/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
