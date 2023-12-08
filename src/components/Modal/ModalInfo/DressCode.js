import React from "react";
import ModalInfo from ".";
import homeroElegante from "../../../images/homero-elegante.jpeg";
import styles from "./ModalInfo.module.scss";
import Moño from "../../../icons/moño";

export default function DressCode() {
  return (
    <ModalInfo
      title="Dress Code"
      icon={<Moño />}
      classNameContent={styles.dressCode}
    >
      <img src={homeroElegante} alt="" />
      <p>
        Elegante, PERO no tanto como Homero. El evento va a ser al aire libre
        sobre la arena. Recomendamos venir cómodos para bailar toda la noche,
        frescos para no sufrir el calor y lo más cancheros que puedan.
      </p>
    </ModalInfo>
  );
}
