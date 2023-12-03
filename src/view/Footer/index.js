import React from "react";
import SaveDate from "../../components/SaveDate";
import Section from "../../components/Section";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Section secondaryBg>
      <div className={styles.container}>
        <SaveDate />
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
