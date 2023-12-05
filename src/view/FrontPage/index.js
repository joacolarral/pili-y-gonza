import React from "react";
import Section from "../../components/Section";
import styles from "./FrontPage.module.scss";
import initialNames from "../../images/initial_names.svg";
import greenFrontpage from "../../images/green_frontpage.svg";
import greenFrontpagePhone from "../../images/green_frontpage_phone.svg";
import green2Frontpage from "../../images/green2_frontpage.svg";
import green2FrontpagePhone from "../../images/green2_frontpage_phone.svg";
import useDeviceType from "../../hooks/useDeviceType";

export default function FrontPage() {
  const device = useDeviceType();

  return (
    <Section padding={0}>
      <div className={styles.greenTop}>
        {device === "mobile" ? (
          <img src={greenFrontpagePhone} alt="" />
        ) : (
          <img src={greenFrontpage} alt="" />
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.dateNumber}>09.03.24</h1>
          <div className={styles.initialNames}>
            <img src={initialNames} alt="" />
          </div>
          <div className={styles.content}>
            <h2>
              Nos casamos y necesitamos invitados con y sin experiencia para
              festejar
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.greenBottom}>
        {device === "mobile" ? (
          <img src={green2FrontpagePhone} alt="" />
        ) : (
          <img src={green2Frontpage} alt="" />
        )}
      </div>
    </Section>
  );
}
