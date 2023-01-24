import React, { useState } from "react";
import "./ContactPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import emailicon from "../../assets/images/email.png";

import { Button } from "react-bootstrap";

import emailjs from "emailjs-com";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_o8ly56l";
      const templateId = "template_pytc6gi";
      const userId = "HJUztYR_aJXkoA6iE";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contactMain">
      <div className="contactSideBar">
        <a href="/">
          <li className="brandIconSide">JL</li>
        </a>

        <li className="icons">
          <a href="https://github.com/joshlawlor">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.linkedin.com/in/joshuaryanlawlor/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="icons">
          <a href="mailto:joshlawlor1@gmail.com">
            <img src={emailicon} alt="email" />
          </a>
        </li>
      </div>
      <div className="contactContainer">
        <div className="contactTitle">
          <h1 className="nintendo-font">Let's Connect</h1>
        </div>

        <div className="contactBox">
          <div id="contact-form">
          <br />

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <textarea
              placeholder="Your Message"
              
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <br />
            <Button id="chatButton"variant="primary" onClick={submit}>Send Message</Button>
            <span style={{ display: emailSent ? "block" : "none" }}>
              Thank you for your message, I will be in touch in no time!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
