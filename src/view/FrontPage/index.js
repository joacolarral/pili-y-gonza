import React from 'react';
import Section from '../../components/Section';
import styles from './FrontPage.module.scss';
import initialNames from '../../images/initial_names.svg';

export default function FrontPage() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.dateNumber}>16.03.23</h1>
          <div className={styles.initialNames}>
            <img src={initialNames} alt="" />
          </div>
          {/* <div className={styles.content}>
            <h2>Queremos que seas parte de éste momento tan especial.</h2>
          </div> */}
        </div>
      </div>
      <div className={styles.greenBottom}></div>
    </Section>
  );
}
