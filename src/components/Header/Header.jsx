import React from "react";
import "./Header.css"
import {ReactComponent as StudyAbroadNL} from "/Users/nakazakiyuudai/Project/study-abroad-nl/src/icons/study-abroad-nl.svg"

function Header(){
    return (
        <nav>
            <div className="div-header">
                <div className="div-logo">
                    <StudyAbroadNL 
                        height={"70px"}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Header;