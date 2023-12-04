import React, { useMemo, useState } from "react";
import Section from "../../components/Section";
import styles from "./Information.module.scss";
import LargeCard from "./LargeCard";
import Modal from "../../components/Modal";
import ConfirmAssitanceModal from "../../components/Modal/ModalForm/ConfirmAssitance";
import Rings from "../../icons/rings.js";
import Cups from "../../icons/cups.js";

export default function Information() {
  const [modalContent, setModalContent] = useState(null);
  const openModalWithContent = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const openGoogleCalendarEventModal = () => {
    const start = "20240309T200000Z";
    const end = "20240310T060000Z";
    const title = encodeURIComponent("Casamiento Belu y Juan");
    const details = encodeURIComponent("Detalles del evento");
    const location = encodeURIComponent(
      "Lagos Del Rocio, Pilar Centro, Pilar, Provincia de Buenos Aires, Argentina"
    );

    const url = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const openGoogleMaps = () => {
    const url = "https://maps.app.goo.gl/dNynbCbt6tdVRKfC6";
    window.open(url, "_blank");
  };

  const ceremony = [
    {
      title: "Día",
      description: "Sábado 09 de Marzo - 17hs",
      buttonLabel: "Agendar",
      onClick: openGoogleCalendarEventModal,
    },
    {
      title: "Lugar",
      description: "Lagos Del Rocio, Pilar Centro",
      buttonLabel: "Confirmar asistencia",
      onClick: () => openModalWithContent(<ConfirmAssitanceModal />),
    },
    {
      title: "Dirección",
      description: "Lagos Del Rocio, Pilar Centro",
      buttonLabel: "Como llegar?",
      onClick: openGoogleMaps,
    },
  ];
  // const celebration = [
  //   {
  //     title: "Día",
  //     description: "Sábado 15 de Mayo - 17hs",
  //     buttonLabel: "Agendar",
  //     onClick: () => {},
  //   },
  //   {
  //     title: "Lugar",
  //     description: "Sábado 15 de Mayo - 17hs",
  //     buttonLabel: "Confirmar asistencia",
  //     onClick: () => {},
  //   },
  //   {
  //     title: "Direccion",
  //     description: "Sábado 15 de Mayo - 17hs",
  //     buttonLabel: "Como llegar?",
  //     onClick: () => {},
  //   },
  // ];

  const icons = (
    <div className={styles.icons}>
      <Cups />
      <Rings />
    </div>
  );

  return (
    <Section>
      <div className={styles.container}>
        {/* <LargeCard title="Ceremonia" details={ceremony} /> */}
        <LargeCard
          icon={icons}
          title={`Ceremonia & Celebración`}
          details={ceremony}
        />
      </div>
      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent}
      </Modal>
    </Section>
  );
}
