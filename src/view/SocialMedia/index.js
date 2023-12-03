import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Ribbon from "../../components/Ribbon";
import styles from "./SocialMedia.module.scss";

export default function SocialMedia() {
  const goToInstagram = () =>
    window.open("https://www.instagram.com/juanbucca/", "_blank");

  return (
    <Section>
      <div className={styles.container}>
        <div>
          <h1>Compartimos este día junto a ti</h1>
          <p>Comparte tus fotos y videos de este hermoso día</p>
        </div>
        <div className={styles.icon} />
        <Ribbon>
          <a href="https://www.instagram.com/juanbucca/">#beluyjuan</a>
        </Ribbon>
        <Button onClick={goToInstagram}>Ver en Instagram</Button>
      </div>
    </Section>
  );
}