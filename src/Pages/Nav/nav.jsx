import React, { useState } from "react";
import "./nav.scss";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";

const Nav = () => {
  const [currentClass, setCurrentClass] = useState("");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setCurrentClass((prev) => (prev = "#home"))}
        className={currentClass === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setCurrentClass((prev) => (prev = "#about"))}
        className={currentClass === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setCurrentClass((prev) => (prev = "#experience"))}
        className={currentClass === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setCurrentClass((prev) => (prev = "#portfolio"))}
        className={currentClass === "#portfolio" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      {/* <a
        href="#services"
        onClick={() => setCurrentClass((prev) => (prev = "#services"))}
        className={currentClass === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#contact"
        onClick={() => setCurrentClass((prev) => (prev = "#contact"))}
        className={currentClass === "#contact" ? "active" : ""}
      >
        <RiMessage2Line />
      </a>
    </nav>
  );
};

export default Nav;
