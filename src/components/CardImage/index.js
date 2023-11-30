// CardImage.jsx
import React from "react";
import styles from "./CardImage.module.scss"; // Importando SCSS como módulo

const CardImage = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content} />
    </div>
  );
};

export default CardImage;
