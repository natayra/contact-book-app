import React from "react";
import "./index.css";

const EditContact = (props) => {
  return (
    <div className="EditContact-container">
      <div className="Contact-container">
        <input
          className="addContact-input"
          id="name"
          placeholder="Name"
          value={props.name}
          onChange={props.addContactInput}
        />
        <input
          className="addContact-input"
          id="address"
          placeholder="Address"
          value={props.address}
          onChange={props.addContactInput}
        />
        <input
          className="addContact-input"
          id="phone"
          placeholder="Phone Number"
          value={props.phone}
          onChange={props.addContactInput}
          onKeyPress={(e) => {
            if (!/[0-9+]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <input
          type="file"
          id="avatar-input"
          name="avatar-input"
          accept="image/apng, image/bmp, image/gif, image/jpeg, image/pjpeg, image/png, image/svg+xml, image/tiff, image/webp, image/x-icon"
          onChange={props.addContactInput}
        />
        <img
          src={props.avatar}
          id="avatar-select-button"
          onClick={() => {
            document.getElementById("avatar-input").click();
          }}
        />
        <button className="add-button" id="invisible-button"></button>
        <button
          className="add-button"
          onClick={() => {
            props.setEdit(false);
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditContact;
