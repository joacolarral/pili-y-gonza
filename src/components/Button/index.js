import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss"; // Nota el cambio aquí para usar módulos SASS

const Button = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {}, // Función vacía por defecto en caso de que no se proporcione onClick
};

export default Button;
