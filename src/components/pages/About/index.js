import React from "react";
import selfieImage from '../../images/selfie.jpeg';
import "./style.css";

function About() {
  return (   
    <div className="wrapper">
      <div className="aboutBody">
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="rule">
            <hr />
        </div>
        <div className="bioContainer">
            <div className="bioBox">       
                <img src={selfieImage} alt="Jesse Aldana"/>
            </div>
            <div className="bioBox">
                <p>I am a full-stack software developer with a certificate from the Coding Boot Camp at UCLA extension and artist with a BA from Brown University and an MFA in painting from the New York Academy of Art. From my career as an oil painter with an established sales record of original and commissioned work I bring a strong sense of composition, color and functional design to my work with languages and frameworks such as CSS, Bootstrap, JavaScript, ReactJS, Node, Express and MongoDB.  My personal practice instills self-reliance and proactivity into my work ethic while I maintain and enjoy a healthy respect for the work of my teammates and colleagues.  
                Web development represents an exciting career opportunity that meshes with my creative, forward-thinking mind. I continue to make oil paintings and always will but working with others in the coding community has been inspiring and energizing in brand new ways.  As a nod to my continuing evolution and ongoing change, this website is styled in the tones of the "whitebox" traditionally associated with a contemporary brick and mortar art gallery.  As my understanding of code deepens, it will infuse these pages with new colors and styles.</p>
            </div> 
        </div>  
        <div className="rule">
            <hr />
        </div>
    </div>
    </div>
  );
}

export default About;