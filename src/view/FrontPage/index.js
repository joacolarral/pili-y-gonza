import React from "react";
import Section from "../../components/Section";
import styles from "./FrontPage.module.scss";
import SaveTheDate from "../../components/SaveDate";

export default function FrontPage() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <SaveTheDate />
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
