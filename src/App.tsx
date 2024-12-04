import React from 'react';
import './styles/App.scss';
import {Navbar} from "./view/Navbar";
import {Body} from "./view/Body";
import {Footer} from "./view/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
