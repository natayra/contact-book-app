import React from "react";
import avatar from "../../Assets/Avatar/avatar.png";
import Contact from "../Contact";
import AddContact from "../AddContact";
import "./index.css"

export default class ContactBook extends React.Component {
  state = {
    counter: 1,
    contacts: [
      {
        id: 0,
        name: "Name",
        address: "Address",
        phone: "Phone Number",
        avatar: avatar,
      },
    ],
  };

  addContactFunction = (newContact) => {
    if (newContact.id !== null) {
      const newContacts = [...this.state.contacts, newContact];
      const newCounter = this.state.counter + 1;
      this.setState({
        counter: newCounter,
        contacts: newContacts,
      });
    } else {
      alert("Please insert contact info to add");
    }
  };

  deleteContactFunction = (deletedContact) => {
    const newContacts = [...this.state.contacts];
    for (var i = 0; i < newContacts.length; i++) {
      if (newContacts[i].id == deletedContact.id) {
        newContacts.splice(i, 1);
      }
      this.setState({
        contacts: newContacts,
      });
    }
  };

  render() {
    return (
      <div className="contactBook-container">
        <div id="title">My Contact  Book</div>
        <div>
        {this.state.contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            addContactFunction={this.addContactFunction}
            deleteContactFunction={this.deleteContactFunction}
          />
        ))}
        <AddContact
          addContactFunction={this.addContactFunction}
          counter={this.state.counter}
        />
        </div>
      </div>
    );
  }
}
