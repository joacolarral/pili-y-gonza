import React, { useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import styles from "./Gifts.module.scss";
import Modal from "../../components/Modal";
import AccountNumber from "../../components/Modal/ModalInfo/AccountNumber";

export default function Gifts() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <Section secondaryBg>
      <div className={styles.container}>
        <div>
          <h1>Regalos</h1>
          <p>Si deseas regalarnos algo más que tu hermosa presencia</p>
        </div>
        <div className={styles.icon} />
        <Button onClick={() => openModalWithContent(<AccountNumber />)}>
          Numero de cuenta
        </Button>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
