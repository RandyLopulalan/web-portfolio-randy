import React from 'react'
import "./contact.scss"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { ContactForm } from './contact-form'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>email</h4>
            <h5>randylopulalan07@gmail.com</h5>
            <a href="mailto:randylopulalan07@gmail.com"> send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>messenger</h4>
            <h5>randy yonathan</h5>
            <a href="https://m.me/rlopulalan" target="_blank" rel='noreferrer'> send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>whatsApp</h4>
            <h5>+64 8xxxxxxxxxx</h5>
            <a href="https://api.whatsapp.com/send?phone=+64" target="_blank" rel='noreferrer'> send a message</a>
          </article>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}