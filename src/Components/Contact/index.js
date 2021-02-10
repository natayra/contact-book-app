import React from "react";
import "./index.css";

const Contact = (props) => {
  return (
    <div className="Contact-container">
      <div className="contact">{props.contact.id}</div>
      <div className="contact">{props.contact.name}</div>
      <div className="contact">{props.contact.address}</div>
      <img className="contact" id="avatar" src={props.contact.avatar}></img>
    </div>
  );
};

export default Contact;
