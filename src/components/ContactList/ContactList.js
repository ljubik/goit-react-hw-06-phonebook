import React from "react";
import style from "./ContactList.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

const ContactList = ({ contacts, delnum, filter, filteredContacts }) => {
  // console.log("contacts", contacts);
  // console.log("filter", filter);
  return (
    <>
    
      {contacts.length > 0 ? (
        <ul className={style.list}>
          {contacts.filter(element => {
            if (!filter) {
              return true
            }
            return element.name.toLowerCase().includes(filter);
          }).map((el) => (
            <li className={style.listLi} key={el.id} >
            <span>{el.name}:</span><span>{el.tel}</span>
            <span><button className={style.listBtn} onClick={() => delnum(el.id)}>Видалити</button></span>
            </li>
          ))}
        </ul>
      ): <ul className={style.list}>
          <li className={style.listLi} >У вас порожній список !</li>
        </ul>}
    </>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),

};


const mapStateToProps = (store) => {
  // console.log("store contact list", store);

  return {
    contacts: store.contacts,
    filter: store.filter,
  };
};

const mapDispatchToProps = {
  delnum: userAction.deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
