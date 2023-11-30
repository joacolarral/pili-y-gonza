import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";
import Section from "../../components/Section";

const Countdown = () => {
  const targetDate = new Date("2024-03-16T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Cuando el countdown llega a 0
      timeLeft = {
        dias: 0,
        hs: 0,
        min: 0,
        seg: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Section backgroundColor={"#f5f5f5"}>
      <div className={styles.container}>
        <h1>Faltan</h1>
        <div className={styles.countdown}>
          {Object.keys(timeLeft).map((interval, index) => (
            <div className={styles.time} key={index}>
              <span className={styles.number}>{timeLeft[interval]}</span>
              <span className={styles.label}>{interval}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Countdown;
