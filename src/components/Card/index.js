import React from "react";
import styles from "./Card.module.scss"; // Importa los estilos SCSS como módulo
import Button from "../Button";

const Card = ({ title, subtitle, buttonText, imageUrl }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
      <p className={styles.subtitle}>{subtitle}</p>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default Card;
