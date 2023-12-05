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
      "https://open.spotify.com/playlist/16EPARFug3WQktMIpy4Qg9?si=Orfmh_LTRxWKe2MkgJy7Nw&pi=e-vCVPxRwXRZW8";
    window.open(url, "_blank");
  };

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.header}>
          <HeartArrows />
          <h1>Fiesta</h1>
          <h2>¿Listos para dejarlo todo?</h2>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title="Música"
            subtitle="Te compartimos la playlist para que te pongas al día 😉"
            buttonText="Sugerir Canción"
            onClick={openSpotify}
            icon={<Corchea />}
          />
          <Card
            title="Dress Code"
            subtitle="Una orientación para tu vestuario"
            buttonText="Ver más"
            onClick={() => openModalWithContent(<DressCode />)}
            icon={<Moño />}
          />
          <Card
            title="Tips y Notas"
            subtitle="Informacion adicional para tener en cuenta"
            buttonText="+ Info"
            onClick={() => openModalWithContent(<TipsAndNotes />)}
            icon={<Board />}
          />
        </div>
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
