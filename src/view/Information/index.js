import React from "react";
import Section from "../../components/Section";
import styles from "./Information.module.scss";
import LargeCard from "./LargeCard";

export default function Information() {
  const ceremony = [
    {
      title: "Día",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Agendar",
      onClick: () => {},
    },
    {
      title: "Lugar",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Confirmar asistencia",
      onClick: () => {},
    },
    {
      title: "Dirección",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Como llegar?",
      onClick: () => {},
    },
  ];
  const celebration = [
    {
      title: "Día",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Agendar",
      onClick: () => {},
    },
    {
      title: "Lugar",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Confirmar asistencia",
      onClick: () => {},
    },
    {
      title: "Direccion",
      description: "Sábado 15 de Mayo - 17hs",
      buttonLabel: "Como llegar?",
      onClick: () => {},
    },
  ];
  return (
    <Section>
      <div className={styles.container}>
        <LargeCard title="Ceremonia" details={ceremony} />
        <LargeCard title="Celebración" details={celebration} />
      </div>
    </Section>
  );
}
