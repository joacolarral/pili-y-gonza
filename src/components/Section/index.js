import React from "react";
import styles from "./Section.module.scss";
import PropTypes from "prop-types";

const Section = ({ children, secondaryBg, padding }) => {
  return (
    <div className={styles.container}>
      <section
        className={styles.section}
        style={{
          backgroundColor: secondaryBg ? "#deebe4" : "#fff",
          padding,
        }}
      >
        {children}
      </section>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.string.isRequired,
  secondaryBg: PropTypes.bool,
};

Section.defaultProps = {
  secondaryBg: false,
};

export default Section;
