import React from "react";
import "./about.scss";
import ME from "../../Assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            animi repudiandae molestias soluta? Quae architecto fuga excepturi
            soluta praesentium rem aspernatur facere reiciendis accusantium!
            Deserunt earum tempora nostrum illo consequuntur!
          </p>
          <a href="#contact" className="btn btn-primary">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
};
