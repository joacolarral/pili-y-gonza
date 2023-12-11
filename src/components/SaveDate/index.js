import React from "react";
import styles from "./SaveDate.module.scss";

export default function SaveTheDate() {
  return (
    <div className={styles.container}>
      <h2 className={styles.dateNumber}>09.03.2024</h2>
      <div className={styles.initialNames}>
        <span>B</span>
        <span>&</span>
        <span>J</span>
      </div>
      <h2>PILI & GONZA</h2>
    </div>
  );
}
