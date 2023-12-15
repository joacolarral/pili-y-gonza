import React, { useState } from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import styles from "./AdditionalInfo.module.scss";
import Modal from "../../components/Modal";
import SongSuggest from "../../components/Modal/ModalForm/SongSuggest";
import DressCode from "../../components/Modal/ModalInfo/DressCode";
import TipsAndNotes from "../../components/Modal/ModalInfo/TipsAndNotes";
import HeartArrows from "../../icons/heartArrows";
import Corchea from "../../icons/corchea";
import Moño from "../../icons/moño";
import Board from "../../icons/board";

export default function AdditionalInfo() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const openSpotify = () => {
    const url =
      "https://open.spotify.com/playlist/1eZGbD8t49HbRpQkLbBTci?si=s08SDcNtRqaQNSp1_5lrJg&pt=1d59c5257ced426dc308730a3d755926";
    window.open(url, "_blank");
  };

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.header}>
          <HeartArrows />
          <div>
            <h1>Fiesta</h1>
            <h2>Hagamos juntos una fiesta única.</h2>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Dress Code"
            subtitle="Una orientación para tu vestuario"
            buttonText="Ver más"
            onClick={() => openModalWithContent(<DressCode />)}
            icon={<Moño />}
          />
          <Card
            title="Música"
            subtitle="¿Cuál es la canción que no puede falta en la playlist de la fiesta?"
            buttonText="Sugerir Canción"
            onClick={openSpotify}
            icon={<Corchea />}
          />
          {/* <Card
            title="Tips y Notas"
            subtitle="Informacion adicional para tener en cuenta"
            buttonText="+ Info"
            onClick={() => openModalWithContent(<TipsAndNotes />)}
            icon={<Board />}
          /> */}
        </div>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
