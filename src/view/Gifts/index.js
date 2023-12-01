import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import styles from "./Gifts.module.scss";

export default function Gifts() {
  return (
    <Section secondaryBg>
      <div className={styles.container}>
        <div>
          <h1>Regalos</h1>
          <p>Si deseas regalarnos algo más que tu hermosa presencia</p>
        </div>
        <div className={styles.icon} />
        <Button>Numero de cuenta</Button>
      </div>
    </Section>
  );
}
