import React from "react";
import Section from "../../components/Section";
import styles from "./MiniFooter.module.scss";
import Heart from "../../icons/heart";

export default function MiniFooter() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div>Hecho con </div> <Heart /> <div>por Joaco Larralde</div>
      </div>
    </Section>
  );
}
