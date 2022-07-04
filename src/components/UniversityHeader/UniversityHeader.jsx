import React from "react";
import "/Users/nakazakiyuudai/Project/study-abroad-nl/src/components/UniversityHeader/UniversityHeader.css";

function UniversityHeader(props){
    return (
        <div className="univ-header-main">
            <div className="univ-icon-container">
                <img src={props.imgPath} alt="univ-img" class="univ-icon"></img>
            </div>
            <div className="univ-info-container">
                <div className="univ-name">
                    {props.name}
                </div>
                <div className="univ-subinfo-container">
                    <div className="univ-city">
                        {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniversityHeader;