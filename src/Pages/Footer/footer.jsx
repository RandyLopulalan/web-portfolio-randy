import React from 'react'
import "./footer.scss"
import {FaFacebookF} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import {FaTwitter} from "react-icons/fa"

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer>
      <a href="#home" className='footer__logo'>RANDY</a>

      <ul className='permalinks'>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        {/* <li><a href="#services">services</a></li> */}
        <li><a href="#portfolio">portfolio</a></li>
        {/* <li><a href="#testimonials">testimonials</a></li> */}
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" rel='noreferrer' target="_blank"><FaFacebookF/></a>
        <a href="https://instagram.com" rel='noreferrer' target="_blank"><RiInstagramFill/></a>
        <a href="https://twitter.com" rel='noreferrer' target="_blank"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
         copyright &copy; {year} randy web portfolio. all rights reserve.
        </small>
      </div>
    </footer>
  )
}

