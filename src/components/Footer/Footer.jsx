import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";




const Footer = () => {
  const instagramUrl = "https://www.instagram.com/rajan.gupta747"; 
  const facebookUrl = "https://www.facebook.com/your_username"; 
  const githubUrl = "https://www.github.com/rajan182004"; 

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <div className="f-icons">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Insta color="white" size="3rem" />
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size="3rem" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Gitub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
