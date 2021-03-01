import { React, useState } from "react";
import EditContact from "../EditContact"
import "./index.css";

const Contact = (props) => {
  const [id, setId] = useState(props.contact.id);
  const [name, setName] = useState(props.contact.name);
  const [address, setAddress] = useState(props.contact.address);
  const [phone, setPhone] = useState(props.contact.phone);
  const [avatar, setAvatar] = useState(props.contact.avatar);
  const [edit, setEdit] = useState(false);
  const [deleted, setDelete] = useState({
    id: id,
    name: name,
    address: address,
    phone: phone,
    avatar: avatar,
  });

  const editHandler = () => {
    setEdit(true);
  };

  const addContactInput = (e) => {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (e.target.files === null) {
      setName(name);
      setAddress(address);
      setPhone(phone);
      setAvatar(props.contact.avatar);
    } else {
      const avatar = window.URL.createObjectURL(e.target.files[0]);
      setName(name);
      setAddress(address);
      setPhone(phone);
      setAvatar(avatar);
    }
  };

  return !edit ? (
    <div className="Contact-container">
      {/*<div className="contact">{id}</div>*/}
      <div className="contact">{name}</div>
      <div className="contact">{address}</div>
      <div className="contact">{phone}</div>
      <img className="contact" id="avatar" src={avatar}></img>
      <button id="edit-button" onClick={editHandler}>
        Edit
      </button>
      <button
        id="delete-button"
        onClick={() => {
          props.deleteContactFunction(deleted);
        }}
      >
        Delete
      </button>
    </div>
  ) : (<EditContact edit={edit} id={id} name={name} address={address} phone={phone} avatar={avatar} addContactInput={addContactInput} setEdit={setEdit}/>)
};

export default Contact;
