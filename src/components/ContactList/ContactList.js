import { useDispatch, useSelector } from 'react-redux';

import contactActions from '../../redux/contact/contact-actions';

import s from './ContactList.module.css';

const filtersContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const contactsList = filtersContacts(contacts, filter);

  const deleteContact = id => {
    dispatch(contactActions.deleteContact(id));
  };

  return (
    <ul className={s.contactList}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <span className={s.contactName}>{name}</span>
          <span className={s.contactNumber}>{number}</span>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
