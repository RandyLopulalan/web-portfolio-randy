import React from "react";
import "./about.scss";
import ME from "../../Assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of experience</small>
            </article>
            <article className="about__card">
              <FaBriefcase className="about__icon" />
              <h5>Fullstack MERN</h5>
              <small>bootcamp at eduwork.id</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>project</h5>
              <small>1 completed</small>
            </article>
          </div>
          <p>
            I'm a fullstack developer, I've been studying since 2021. The first time I
            learned html, css, javascript and continued study at eduwork. I currently
            have experience making several web-based applications
          </p>
          <a href="#contact" className="btn btn-primary">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
};
