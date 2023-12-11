import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";
import styles from "./Button.module.scss"; // Nota el cambio aquí para usar módulos SASS

const Button = ({ children, onClick, className, type, isOutline }) => {
  const buttonClassName = cs(
    isOutline ? styles.buttonOutline : styles.button,
    className
  );

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isOutline: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
  isOutline: false,
};

export default Button;
