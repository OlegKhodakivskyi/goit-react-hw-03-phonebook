import React from "react";
import ContactFormListItem from "./ContactFormListItem/ContactFormListItem";
import css from "./ContactList.module.css";

const ContactFormList = ({ findContact, onRemoveContact }) => (
  <>
    <ul className={css.ContactList}>
      {findContact.map(({ id, name, number }) => (
        <ContactFormListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemoveContact(id)}
        />
      ))}
    </ul>
  </>
);

export default ContactFormList;
