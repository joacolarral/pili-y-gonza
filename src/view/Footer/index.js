import React from "react";
import Section from "../../components/Section";
import styles from "./Footer.module.scss";
import initialsFooter from "../../images/initials_footer.svg";

export default function Footer() {
  return (
    <Section>
      <div className={styles.container}>
        <img src={initialsFooter} alt="" />

        {/* <SaveDate />
        <div className={styles.optionsContainer}>
          <p>Confirmar asistencia a ceremonia</p>
          <p>Confirmar asistencia a fiesta</p>
          <p>Sugerir canción</p>
          <p>Agendar Fiesta</p>
          <p>Agendar Ceremonia</p>
        </div> */}
      </div>
    </Section>
  );
}
