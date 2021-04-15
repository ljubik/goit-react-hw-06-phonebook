import React from "react";
import PropTypes from "prop-types";
import style from "../Main/Main.module.css";
import { Switch, Route, Link} from 'react-router-dom'

function Main({ title }) {

  return (
    <main>
      <Link to="/" exact="true"><h1 className={style.center }>{title}</h1></Link>
    </main>
  );
}

export default Main;

Main.propTypes = {
  title: PropTypes.string.isRequired,
};
