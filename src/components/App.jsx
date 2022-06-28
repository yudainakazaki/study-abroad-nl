import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "./Router";
import "../css/App.css"

function App(){
    return <div className="appBody">
                <Header />
                <Router />
                <Footer />
            </div>;
}

export default App;