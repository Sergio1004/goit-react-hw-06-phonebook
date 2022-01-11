import { createAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('phonebook/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
