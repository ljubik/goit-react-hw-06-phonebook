import React from "react";
import PropTypes from "prop-types";
import style from "../Main/Main.module.css";


function Main({ title }) {

  return (
    <main>
      <h1 className={style.center }>{title}</h1>
    </main>
  );
}

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
