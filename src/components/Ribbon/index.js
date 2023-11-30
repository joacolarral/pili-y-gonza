import React from "react";
import PropTypes from "prop-types";
import styles from "./Ribbon.module.scss"; // Importa el módulo SCSS

const Ribbon = ({ children }) => (
  <div className={styles.ribbon}>{children}</div>
);

Ribbon.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Ribbon;
