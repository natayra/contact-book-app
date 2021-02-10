import React, { useState } from "react";
import avatar from "../../Assets/Avatar/avatar.png";
import "./index.css";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      address: "",
      avatar: avatar,
    };
  }

  avatarHandler = (e) => {
    this.setState((state) => {
      let avatarInput = window.URL.createObjectURL(e.target.files[0]);
      return {
        avatar: avatarInput,
      };
    });
  };

  addContactInput = (e) => {
    const id = 12;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    this.setState({
      id: id,
      name: name,
      address: address,
      avatar: this.state.avatar,
    });
  };

  render() {
    return (
      <div className="AddContact-container">
        <input
          className="addContact-input"
          id="name"
          placeholder="name"
          onChange={this.addContactInput}
        />
        <input
          className="addContact-input"
          id="address"
          placeholder="address"
          onChange={this.addContactInput}
        />
        <input
          type="file"
          id="avatar-input"
          name="avatar-input"
          accept="image/apng, image/bmp, image/gif, image/jpeg, image/pjpeg, image/png, image/svg+xml, image/tiff, image/webp, image/x-icon"
          onChange={this.avatarHandler}
        />
        <img
          src={this.state.avatar}
          id="avatar-select-button"
          onClick={() => {
            document.getElementById("avatar-input").click();
          }}
        />
        <button
          id="submit-button"
          onClick={() => {
            this.props.addContactFunction(this.state);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddContact;
