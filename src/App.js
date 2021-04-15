import "./App.css";
import React, { Component } from "react";

import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";
import filterAction from "./redux/actions/filterAction";
import actions from './redux/modal/actions';
import operations from './redux/orders/operations';
import { getOrders, filteredOrders } from './redux/orders/selectors';


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
    this.props.getMyOrders()
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { getValue, getList} = this;
    console.log(this.props.myOrders)
    const {
          myOrders,
          addMyOrder,
          getMyOrders,
          deleteMyOrder,
          getMyFilter,
    } = this.props
    return (
      <div className="App">
        <Main title="Телефонна книжка v.1.4"/>
        <ContactForm  getValue={getValue} />
        <h2 className="pApp">Пошук контактів </h2>
        <Filter filterContact={getValue} />
        <ContactList contacts={getList()} />
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
  getMyOrders: operations.getOrders,
  addMyOrder: operations.addOrder,
  deleteMyOrder: operations.deleteOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
