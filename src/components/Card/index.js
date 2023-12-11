import React from "react";
import styles from "./Card.module.scss"; // Importa los estilos SCSS como módulo
import Button from "../Button";
import DecorativeRight from "../../icons/decorativeRight";
import DecorativeLeft from "../../icons/decorativeLeft";

const Card = ({ title, subtitle, buttonText, icon, onClick }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.decoratives}>
        <DecorativeLeft />
        <DecorativeRight />
      </div> */}
      <div className={styles.header}>
        {icon}
        <h1 className={styles.title}>{title}</h1>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};

export default Card;
