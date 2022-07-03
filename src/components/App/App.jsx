import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Universities from "../../pages/Universities/Universities";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App(){
    return (
        <div className="app-frame">
            <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Universities/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;