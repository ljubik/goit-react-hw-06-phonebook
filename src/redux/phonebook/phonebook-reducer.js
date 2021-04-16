import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './phonebook-actions';

const addContact = (state, { payload }) => [...state, payload];

const deleteContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, { payload }) => payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
