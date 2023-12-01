import React from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import styles from "./AdditionalInfo.module.scss";

export default function AdditionalInfo() {
  return (
    <Section>
      <div className={styles.container}>
        <div>
          <h1>Fiesta</h1>
          <p>
            Hagamos juntos una fiesta única. Dejamos algunos detalles a tener en
            cuenta.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Musica"
            subtitle="¿Cuál es la canción que no debe faltar en la playlist de la fiesta?"
            buttonText="Sugerir Canción"
          />
          <Card
            title="Dress Code"
            subtitle="Una orientación para tu vestuario"
            buttonText="Ver más"
          />
          <Card
            title="Tips y Notas"
            subtitle="Informacion adicional para tener en cuenta"
            buttonText="+ Info"
          />
        </div>
      </div>
    </Section>
  );
}
