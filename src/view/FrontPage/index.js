import React from "react";
import Section from "../../components/Section";
import styles from "./FrontPage.module.scss";
import initialNames from "../../images/initial_names.png";
import greenFrontpage from "../../images/green_frontpage.png";
import green2Frontpage from "../../images/green2_frontpage.png";

export default function FrontPage() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.greenTop}>
          <img src={greenFrontpage} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.dateNumber}>09.03.24</h1>
          <div className={styles.initialNames}>
            <img src={initialNames} alt="" />
          </div>
          <div className={styles.content}>
            <h2>
              Todos somos mortales, hasta el primer beso y la segunda copa de
              vino
            </h2>
          </div>
        </div>
        <div className={styles.greenBottom}>
          <img src={green2Frontpage} alt="" />
        </div>
      </div>
    </Section>
  );
}
