import React from "react";
import styles from "./ModalInfo.module.scss";
import PropTypes from "prop-types";

export default function ModalInfo({ title, icon, children, classNameContent }) {
  return (
    <div className={styles.container}>
      {icon}
      <h1>{title}</h1>
      <div className={`${styles.content} ${classNameContent}`}>{children}</div>
    </div>
  );
}

ModalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  classNameContent: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

ModalInfo.defaultProps = {
  classNameContent: "",
};
