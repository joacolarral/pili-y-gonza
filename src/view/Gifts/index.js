import React, { useState } from "react";
import Section from "../../components/Section";
import Button from "../../components/Button";
import styles from "./Gifts.module.scss";
import Modal from "../../components/Modal";
import AccountNumber from "../../components/Modal/ModalInfo/AccountNumber";
import Gift from "../../icons/gift";

export default function Gifts() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);
  return (
    <Section padding={0}>
      <div className={styles.container}>
        <div>
          <h1>Regalos</h1>
          <h2>
            Lo más importante es tu presencia, pero si deseas hacernos un regalo
            acá dejamos algunas opciones.
          </h2>
        </div>
        <Gift />
        <div>
          <Button
            onClick={() => openModalWithContent(<AccountNumber />)}
            className={styles.buttonOutline}
            isOutline
          >
            Lista de regalos
          </Button>
          <Button onClick={() => openModalWithContent(<AccountNumber />)}>
            Número de cuenta
          </Button>
        </div>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
