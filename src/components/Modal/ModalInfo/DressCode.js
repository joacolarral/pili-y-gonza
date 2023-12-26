import React from 'react';
import ModalInfo from '.';
import styles from './ModalInfo.module.scss';
import Moño from '../../../icons/moño';

export default function DressCode() {
  return (
    <ModalInfo
      title="Dress Code"
      icon={<Moño />}
      classNameContent={styles.dressCode}
    >
      <p>
        Elegimos un código de vestimenta formal, sin embargo, lo más importante
        es que se sientan cómodos y a gusto. Así que, mientras luzcan elegantes,
        ¡siéntanse libres de elegir atuendos en los que puedan disfrutar de la
        celebración al máximo!
      </p>
    </ModalInfo>
  );
}
