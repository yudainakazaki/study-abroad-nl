import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Universities from "../../pages/Universities/Universities";
import University from "../../pages/University/University"
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App(){
    return (
        <div className="app-frame">
            <Header />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Universities/>} />
                    <Route path="/programs" />
                    <Route path="/university" element={<University name="Univesity of Amsterdam" imgPath={require("/Users/nakazakiyuudai/Project/study-abroad-nl/src/images/uni-icons/uva.png")} city="Amsterdam, NL"/>} />
                    <Route path="/program" />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;