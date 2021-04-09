import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (e) => {
    const { filterName} = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterName(e.target.value);
  };

  render() {
    const { handleChange } = this;
    const { filter} = this.props;
    return (
      <>
      <div className={style.filter}>Ваш останній запит {filter} </div> 
      <input
        className={style.filter}
        onInput={handleChange}
        type="text"
        name="filter"
        placeholder="Введіть імя"
        defaultValue={filter}
      />
      </>
    );
  }
}

const mapStateToProps = (store) => {
  // console.log("store filter", store);

  return {
    contacts: store.contacts,
    filter: store.filter,
  };
};

const mapDispatchToProps = {
  filterName: userAction.filterName,
  // delnum: userAction.deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  // filterContact: PropTypes.func.isRequired,
};

