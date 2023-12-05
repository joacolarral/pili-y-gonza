import React, { useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import styles from "./Gifts.module.scss";
import Modal from "../../components/Modal";
import AccountNumber from "../../components/Modal/ModalInfo/AccountNumber";
import Gift from "../../icons/gift";
import greenPlant from "../../images/green_gifts.png";
import greenPlantPhone from "../../images/green_gifts_phone.png";
import useDeviceType from "../../hooks/useDeviceType";

export default function Gifts() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);
  const device = useDeviceType();
  return (
    <Section padding={0}>
      {device !== "mobile" && (
        <div className={styles.greenPlant}>
          <img src={greenPlant} alt="" />
        </div>
      )}
      <div className={styles.container}>
        <div>
          <h1>Regalos</h1>
          <h2>Si deseas regalarnos algo más que tu hermosa presencia</h2>
        </div>
        <Gift />
        <Button onClick={() => openModalWithContent(<AccountNumber />)}>
          Número de cuenta
        </Button>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
      {device === "mobile" && (
        <div className={styles.greenPlant}>
          <img src={greenPlantPhone} alt="" />
        </div>
      )}
    </Section>
  );
}
