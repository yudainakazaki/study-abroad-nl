import React from "react";
import "./UniversityCard.css";
import {ReactComponent as Location} from "/Users/nakazakiyuudai/Project/study-abroad-nl/src/icons/location-dot-solid.svg";

function UniversityCard(props){
    return (
        <div className="univ-card-main">
            <div className="univ-img-container">
                <img className="univ-img" src={props.imgPath} alt={props.alt} />
            </div>
            <div className="infoContainer">
                <div className="univ-name">{props.univ}</div>
                <div className="location-container">
                    <Location className="location-icon"/>
                    <div>{props.location}</div>
                </div>
                <div className="rank-container">
                    
                
                </div>
                <div className="num-program">{props.numPrograms} programs</div>
            </div>
        </div>
    )
}

export default UniversityCard;