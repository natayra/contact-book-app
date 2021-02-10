import React, { useState } from "react";
import logo from "../../logo.svg";
import "./index.css";

class AddContact extends React.Component {
  state = {
    image: null,
    fileRef: React.createRef(),
  };

  avatarHandler = (e) => {
    this.setState((state) => {
      const image = this.state.fileRef.current.value;

      let avatarInput = window.URL.createObjectURL(e.target.files[0]);
      console.log(avatarInput)
      return {
        image: avatarInput,
      };
    });
  };


  render() {
    return (
      <div className="AddContact-container">
        <input className="addContact-input" id="id" placeholder="id"/>
        <input className="addContact-input" id="name" placeholder="name"/>
        <input className="addContact-input" id="address" placeholder="address"/>
        <input
          type="file"
          placeholder="avatar"
          id="avatar-input"
          name="avatar-input"
          accept="image/apng, image/bmp, image/gif, image/jpeg, image/pjpeg, image/png, image/svg+xml, image/tiff, image/webp, image/x-icon"
          ref={this.state.fileRef}
          onChange={this.avatarHandler}
        />
        <img id="avatar-pic" src={this.state.image}></img>
        <button id="submit-button">
          Add
        </button>
      </div>
    );
  }
}
export default AddContact;
