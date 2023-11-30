import React from "react";
import styles from "./Section.module.scss";
import PropTypes from "prop-types";

const Section = ({ children, backgroundColor, padding }) => {
  return (
    <div className={styles.container}>
      <section
        className={styles.section}
        style={{
          backgroundColor,
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
  backgroundColor: PropTypes.string,
};

Section.defaultProps = {
  backgroundColor: "#fff",
  padding: "2rem 0",
};

export default Section;
