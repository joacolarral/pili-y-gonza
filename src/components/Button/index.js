import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss"; // Nota el cambio aquí para usar módulos SASS

const Button = ({ children, onClick, className, type }) => (
  <button
    type={type}
    className={`${styles.button} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
};

export default Button;
