import React from "react";
import Section from "../../components/Section";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Section secondaryBg>
      <div className={styles.container}>
        <div>
          <div className={styles.initialNames}>
            <span>B</span>
            <span>&</span>
            <span>J</span>
          </div>
          <h2>BELEN & JUAN</h2>
        </div>
        <div className={styles.optionsContainer}>
          <p>Confirmar asistencia a ceremonia</p>
          <p>Confirmar asistencia a fiesta</p>
          <p>Sugerir canción</p>
          <p>Agendar Fiesta</p>
          <p>Agendar Ceremonia</p>
        </div>
      </div>
    </Section>
  );
}
