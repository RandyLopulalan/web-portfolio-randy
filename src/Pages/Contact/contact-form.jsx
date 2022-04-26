import React from "react";
import emailjs from "emailjs-com";
//need to install emailjs -> npm install emailjs-com

export const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6gv2qs9",
        "template_vvda27r",
        e.target,
        "CObHvRtFys0beO9Ox"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
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
