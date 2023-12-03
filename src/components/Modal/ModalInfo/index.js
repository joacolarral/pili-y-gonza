import React from "react";
import styles from "./ModalInfo.module.scss";
import PropTypes from "prop-types";

export default function ModalInfo({ title, children }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

ModalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

ModalInfo.defaultProps = {};
