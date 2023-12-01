// CardImage.jsx
import React from "react";
import styles from "./CardImage.module.scss"; // Importando SCSS como módulo

const CardImage = ({ title, imageUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content} />
    </div>
  );
};

export default CardImage;
