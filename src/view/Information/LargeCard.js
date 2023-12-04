import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import styles from "./Information.module.scss";

export default function LargeCard({ title, details, icon }) {
  return (
    <div className={styles.largeCardContainer}>
      <div className={styles.content}>
        {icon}
        <h1>{title}</h1>
        <div className={styles.details}>
          {details.map((detail) => {
            return (
              <div key={detail.title} className={styles.detailsContainer}>
                <h2>{detail.title}</h2>
                <p>{detail.description}</p>
                <Button onClick={detail.onClick}>{detail.buttonLabel}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      onClick: PropTypes.func,
      buttonLabel: PropTypes.string,
    })
  ).isRequired,
  icon: PropTypes.elementType,
};

LargeCard.defaultProps = {
  details: [],
  icon: null,
};
