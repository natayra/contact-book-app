import React from "react";
import avatar from "../../Assets/Avatar/avatar.png";
import Contact from "../Contact/index";
import AddContact from "../AddContact/index";

export default class ContactBook extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Propulsion Academy",
        address: "Zurich",
        avatar: avatar,
      },
      {
        id: 2,
        name: "Natayra Santos",
        address: "Zurich",
        avatar: avatar,
      },
    ],
  };

  addContactFunction = (newContact) => {
    const newContacts = [...this.state.contacts, newContact];
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    return (
      <div className="ContactBook-container">
        {this.state.contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
        <AddContact addContactFunction={this.addContactFunction} />
      </div>
    );
  }
}
