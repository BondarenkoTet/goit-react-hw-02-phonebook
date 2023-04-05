import React from "react";
import css from "./ContactsList.module.css"

class ContactList extends React.Component {
    render () {
    return  this.props.contactsArr.map(contact => (
        <li key={contact.id}>
            <span className={css["span-name"]}>{contact.name}:</span>
            <span className={css["span-number"]}>{contact.number}</span> 
            <button 
                type="button"
                className={css["delete-btn"]}
                onClick={() => this.props.deleteContact(contact.id)}
                //className={css.delete__btn}
                id={contact.id}
            >Delete
            </button>
        </li>
    ))
}
}
export default ContactList