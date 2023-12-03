import React from "react";
import styles from "./Card.module.scss"; // Importa los estilos SCSS como módulo
import Button from "../Button";

const Card = ({ title, subtitle, buttonText, imageUrl, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.image} />
        {imageUrl && (
          <img src={imageUrl} alt={title} className={styles.image} />
        )}
        <p className={styles.subtitle}>{subtitle}</p>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;
