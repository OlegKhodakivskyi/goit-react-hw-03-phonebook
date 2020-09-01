import React, { Component } from "react";
import ContactForm from "./Contacts/ContactForm";
import ContactFormList from "./Contacts/ContactFormList/ContactFormList";
import Filter from "./Filter/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    // console.log("DidMount");
    const persistedContacts = localStorage.getItem("contacts");
    // console.log(JSON.parse(persistedContacts));
    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevState) {
    // console.log("Did Update");
    // console.log("prevState", prevState);
    // console.log("this.state", this.state);

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert("The name is already exist")
      : this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            {
              id: uuidv4(),
              name,
              number,
            },
          ],
        }));
  };

  onRemoveContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  findContact = () => {
    return this.state.filter
      ? this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactFormList
          findContact={this.findContact()}
          onRemoveContact={this.onRemoveContact}
        />
      </>
    );
  }
}

export default App;
