import contactActions from './phonebook-actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
const addContact = ({ name, number }) => dispatch => {
  dispatch(contactActions.addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactActions.addContactError()));
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))

    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactActions.removeContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactActions.removeContactSuccess(id)))

    .catch(error => dispatch(contactActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
