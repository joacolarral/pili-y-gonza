import React from 'react';
import Section from '../../components/Section';
import styles from './FrontPage.module.scss';
import initialNames from '../../images/initial_names.svg';

export default function FrontPage() {
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.dateNumber}>16.03.24</h1>
          <div className={styles.initialNames}>
            <img src={initialNames} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.greenBottom}></div>
    </Section>
  );
}
