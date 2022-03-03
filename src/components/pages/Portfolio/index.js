import React from "react";
import "./style.css"
import astronomy from "../../images/astronomy.png";
import directory from "../../images/directory.png";
import dragon from "../../images/dragon.png";
import quiz from "../../images/quiz.png";

function Portfolio() {
    return (
        <div className="portWrapper">
            <div className="portBody">
            <h2>Click on a thumbnail to view the live site.</h2>
                <div className="portContainer">
                    <div className="tile">
                        <a href="https://ce-akatl.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={astronomy} alt="Imaginary Traveler"/>
                        </a>
                        <div id="caption">
                            Ce Akatl
                        </div>
                        <div id="description">
                            This app is a compendium of knowledge on ancient Mayan astronomy with learning modules on Mayan mathematics and calendrics.
                        </div>
                        <div id="link">
                            <a href="https://github.com/jessealdana/astronomy" target="blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                    </div>
                    <div className="tile">
                        <a href="https://jessealdana.github.io/Coding-Quiz/" target="_blank" rel="noopener noreferrer">
                            <img src={quiz} alt="Coding Quiz"/>
                        </a>
                        <div id="caption">
                            Coding Quiz
                        </div>
                        <div id="description">
                        This app presents the user with a short quiz about the intersection of coding and popular culture.
                        </div>
                        <div id="link">
                            <a href="https://github.com/jessealdana/Coding-Quiz" target="blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                    </div> 
                    <div className="tile">
                        <a href="https://shielded-mesa-12076.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={dragon} alt="Boardgame"/>
                        </a>
                        <div id="caption">
                            Flappy Dragon
                        </div>
                        <div id="description">
                            This app presents a dragonish twist on a CRUD app.
                        </div>
                        <div id="link">
                            <a href="https://github.com/jessealdana/flap-dragon" target="blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                    </div> 
                    <div className="tile">
                        <a href="https://super-dir.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={directory} alt="Directory"/>
                        </a>
                        <div id="caption">
                            Directory
                        </div>
                        <div id="description">
                            This app offers users within an elementary school community a searchable directory of parents' contact information.
                        </div>
                        <div id="link">
                            <a href="https://github.com/jessealdana/super-dir" target="blank" rel="noopener noreferrer">Github Repo</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Portfolio