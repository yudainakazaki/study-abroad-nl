import React from "react";
import "../css/header.css"
import {ReactComponent as StudyAbroadNL} from "../icons/study-abroad-nl.svg"

function Header(){
    return (
        <nav>
            <div className="div-header">
                <div className="div-logo">
                    <StudyAbroadNL 
                        height={"75px"}
                        width={"200px"}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header;