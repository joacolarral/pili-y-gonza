import React, { useState } from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import styles from "./AdditionalInfo.module.scss";
import Modal from "../../components/Modal";
import SongSuggest from "../../components/Modal/ModalForm/SongSuggest";
import DressCode from "../../components/Modal/ModalInfo/DressCode";
import TipsAndNotes from "../../components/Modal/ModalInfo/TipsAndNotes";

export default function AdditionalInfo() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <Section>
      <div className={styles.container}>
        <div>
          <h1>Fiesta</h1>
          <p>
            Hagamos juntos una fiesta única. Dejamos algunos detalles a tener en
            cuenta.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Musica"
            subtitle="¿Cuál es la canción que no debe faltar en la playlist de la fiesta?"
            buttonText="Sugerir Canción"
            onClick={() => openModalWithContent(<SongSuggest />)}
          />
          <Card
            title="Dress Code"
            subtitle="Una orientación para tu vestuario"
            buttonText="Ver más"
            onClick={() => openModalWithContent(<DressCode />)}
          />
          <Card
            title="Tips y Notas"
            subtitle="Informacion adicional para tener en cuenta"
            buttonText="+ Info"
            onClick={() => openModalWithContent(<TipsAndNotes />)}
          />
        </div>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
