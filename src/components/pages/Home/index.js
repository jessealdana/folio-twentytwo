import React from "react";
import aboutBackground from "../../images/aboutBackground.jpg";
import "./style.css"

function Home(){
    return(
        <div className="body">
            <div className="holder"></div>
            <div className="container">
                <img src={aboutBackground} alt="McWay Falls" />
                <h1>Jesse Aldana</h1>
                <h3>Software Developer</h3>
            </div>
            <div className="holder"></div>
        </div>
    )
}

export default Home