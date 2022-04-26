import React from "react";
import CTA from "./cta";
import "./header.scss";
import ME from "../../Assets/home.png";
import HeaderSocial from "./header-social";
import Nav from "../Nav/nav";

export const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>hello i'm</h5>
        <h1>randy lopulalan</h1>
        <h5 className="text-light">front end developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          scroll down
        </a>
        <a href="#contact" className="tab__down">
          tab down
        </a>
      </div>
      <Nav />
    </header>
    
  );
};


