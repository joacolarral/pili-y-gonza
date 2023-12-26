import React, { useState, useEffect } from 'react';
import styles from './Countdown.module.scss';
import Section from '../../components/Section';

const Countdown = () => {
  const targetDate = new Date('2024-03-16T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        días: 0,
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
    <Section secondaryBg>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>¡Estas invitado!</h1>
            <p>Queremos que seas parte de este momento tan especial.</p>
          </div>
          <div className={styles.countdown}>
            {Object.keys(timeLeft).map((interval, index) => (
              <div className={styles.time} key={index}>
                <span className={styles.number}>{timeLeft[interval]}</span>
                <span className={styles.label}>{interval}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Countdown;
