import "./App.css";
import React, { Component } from "react";

import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

// import routes from "./routes";
import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";
import filterAction from "./redux/actions/filterAction";
import actions from './redux/modal/actions';



class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  
  addContact = (el) => {
    console.log("add contact check",this.props)
    const { contacts } = this.props;
    const twin = contacts.some((c) => c.name === el.name);
    twin
      ? alert(`Увага дане імя уже використовується!` )
      : this.setState((prev) => {
          return {
            // contacts: [...prev.contacts, el],
          };
        });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  toGetFilteredContacts = () => {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter);
    });

    return filteredContacts;
  };

  getList = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = this.toGetFilteredContacts();
    if (filter) return filteredContacts;
    return contacts;
  };

  toDelete = (id) => {
    this.setState((prev) => {
      const contacts = prev.contacts.filter((el) => !(el.id === id));
      return { contacts };
    });
  };

  componentDidMount() {
    const contactLocalStorege = JSON.parse(localStorage.getItem("contacts"));
    if (contactLocalStorege) {
      this.setState(() => ({ contacts: [...contactLocalStorege] }));
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  
  componentWillUnmount(){

  }

  toggleModal = () => {
    const { myModal, myChangeModal } = this.props
    console.log(myModal)
    return myChangeModal(!myModal)
  }

  render() {
    const { addContact, getValue, getList, toDelete, toggleModal } = this;
    const { state, myModal } = this.props
    return (
      <div className="App">
        <Main title="Телефонна книжка v.1.3"/>
        <ContactForm  getValue={getValue} />
        <h2 className="pApp">Пошук контактів </h2>
        <Filter filterContact={getValue} />
        <ContactList contacts={getList()} />
        {/* <button onClick={toggleModal}>{`click ${myModal}`}</button> */}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log("store", store);

  return {
    contacts: store.contacts,
    filter : store.filteredContacts,
  };
};

const mapDispatchToProps = {
  adnum: addUserAction.addNumber,
  delnum: addUserAction.deleteNumber,
  filter: filterAction.filter,
  myChangeModal: actions.changeShowModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
