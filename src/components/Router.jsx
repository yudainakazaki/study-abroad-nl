import React from "react";
import { Routes, Route } from "react-router-dom";
import Universities from "../pages/Universities";

function Router() {
    return (
        <Routes>
            <Route path="/universities" component={Universities}></Route>
            <Route></Route>
        </Routes>
    );
}

export default Router;

//useful link
//https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react