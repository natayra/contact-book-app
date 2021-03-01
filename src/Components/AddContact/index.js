import React from "react";
import avatar from "../../Assets/Avatar/avatar.png";
import "./index.css";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      address: "",
      phone: "",
      avatar: avatar,
    };
  }

  addContactInput = (e) => {
    const id = this.props.counter;
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    if (e.target.files === null) {
      this.setState({
        id: id,
        name: name,
        address: address,
        phone: phone,
        avatar: this.state.avatar,
      });
    } else {
      const avatar = window.URL.createObjectURL(e.target.files[0]);
      this.setState({
        id: id,
        name: name,
        address: address,
        phone: phone,
        avatar: avatar,
      });
    }
  };

  render() {
    return (
      <div className="AddContact-container">
        <input
          className="addContact-input"
          id="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.addContactInput}
        />
        <input
          className="addContact-input"
          id="address"
          placeholder="Address"
          value={this.state.address}
          onChange={this.addContactInput}
        />
        <input
          className="addContact-input"
          id="phone"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={this.addContactInput}
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
          onChange={this.addContactInput}
        />
        <img
          src={this.state.avatar}
          id="avatar-select-button"
          onClick={() => {
            document.getElementById("avatar-input").click();
          }}
        />
        <button className="add-button" id="invisible-button"></button>
        <button
          className="add-button"
          onClick={() => {
            this.props.addContactFunction(this.state);
            this.setState({
              id: null,
              name: "",
              address: "",
              phone: "",
              avatar: avatar,
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddContact;
