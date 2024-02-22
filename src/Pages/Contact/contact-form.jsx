import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//need to install emailjs -> npm install emailjs-com

export const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_KEY,
      process.env.REACT_APP_EMAIL_TEMPLATE,
      e.target,
      process.env.REACT_APP_EMAIL_USER
    )
      .then((res) => {
          toast.success('Email sent successfully!')
      },
      (error) => {
        console.log(error.text);
        toast.success('Something went wrong!')
      });
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <ToastContainer />
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Your Subject"
        required
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
};
