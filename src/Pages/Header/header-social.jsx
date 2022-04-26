import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FaDev} from "react-icons/fa"


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" rel='noreferrer' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" rel='noreferrer' target="_blank"><BsGithub/></a>
        <a href="https://dev.to" rel='noreferrer' target="_blank"><FaDev/></a>
    </div>
  )
}

export default HeaderSocial