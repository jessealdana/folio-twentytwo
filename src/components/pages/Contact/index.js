import React from 'react';
import "./style.css";

function Contact(){
    return (
        <div className="socials">
            <div className="conContainer">
                <div>
                    <h2>Here's how to reach me or see what I'm up to:</h2>
                    <p>email: jesse.aldana@gmail.com</p>
                </div>
                <div className="button">
                    <a href="https://www.linkedin.com/in/jesse-aldana-6b7a391a5 " target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" role="button">Linkedin</a>
                </div>           
                <div className="button">
                    <a href="https://github.com/jessealdana " target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" role="button">Github</a>
                </div>
                <div className="button">
                    <a href="https://www.ugallery.com/artist/jesse-aldana " target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" role="button">UGallery</a>
                </div>
                <div className="button">
                    <a href="https://www.instagram.com/jsealdana/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" role="button">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Contact