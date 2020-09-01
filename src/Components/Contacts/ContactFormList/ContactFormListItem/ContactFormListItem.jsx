import React from "react";
import css from "./ContactFormListItem.module.css";

const ContactFormListItem = ({ id, name, number, onRemove }) => (
  <>
    <li key={id} className={css.ContactListItem}>
      <p> {name} : </p>
      <p> {number} </p>
      <button type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  </>
);

export default ContactFormListItem;
