import React from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Ribbon from "../../components/Ribbon";
import styles from "./SocialMedia.module.scss";
import Instagram from "../../icons/instagram";
import DecorativeTop from "../../icons/decorativeTop";

export default function SocialMedia() {
  const goToInstagram = () =>
    window.open("https://www.instagram.com/juanbucca/", "_blank");

  return (
    <Section secondaryBg>
      <div className={styles.container}>
        <div>
          <DecorativeTop />
          <h1>Compartimos este día junto a ti</h1>
          <p>Comparte tus fotos y videos de este hermoso día</p>
        </div>
        <Instagram />
        <Ribbon>
          <a href="https://www.instagram.com/juanbucca/">#beluyjuan</a>
        </Ribbon>
        <Button onClick={goToInstagram}>Ver en Instagram</Button>
      </div>
    </Section>
  );
}
