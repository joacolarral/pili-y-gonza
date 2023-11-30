import React from "react";
import Section from "../../components/Section";
import fotoPortada from "../../images/portada.jpg";
import styles from "./FrontPage.module.scss";

export default function FrontPage() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={fotoPortada} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p className={styles.dateNumber}>01.01.2024</p>
            <div className={styles.initialNames}>
              <span>B</span>
              <span>&</span>
              <span>J</span>
            </div>
            <h2>BELEN & JUAN</h2>

            <p>
              Todos somos mortales, hasta el primer beso y la segunda copa de
              vino
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
