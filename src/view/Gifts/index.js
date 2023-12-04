import React, { useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import styles from "./Gifts.module.scss";
import Modal from "../../components/Modal";
import AccountNumber from "../../components/Modal/ModalInfo/AccountNumber";
import Gift from "../../icons/gift";
import greenPlant from "../../images/green_gifts.png";

export default function Gifts() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <Section padding={0}>
      <div className={styles.greenPlant}>
        <img src={greenPlant} alt="" />
      </div>
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
    </Section>
  );
}
