import React from "react";
import Contact from "../Contact/index";
import AddContact from "../AddContact/index";

export default class ContactBook extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Propulsion Academy",
        address: "Zurich",
        avatar: "propulsion-academy-logo.png",
      },
      {
        id: 2,
        name: "Natayra Santos",
        address: "Zurich",
        avatar: "natayra.png",
      },
    ],
  };

  render() {
    return (
      <div className="ContactBook-container">
        {this.state.contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
          <AddContact />
      </div>
    );
  }
}
