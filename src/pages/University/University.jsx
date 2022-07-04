import React from "react";
import UniversityHeader from "../../components/UniversityHeader/UniversityHeader";

function University(props){
    return (
        <div className="univ-main">
            <UniversityHeader name={props.name} imgPath={props.imgPath} city={props.city} />
        </div>
    );
}

export default University;