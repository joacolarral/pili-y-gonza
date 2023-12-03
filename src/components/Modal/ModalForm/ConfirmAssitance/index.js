import React from "react";
import ModalForm from "..";

export default function ConfirmAssitanceModal({ onSubmit }) {
  const initialValues = {
    name: "",
    importantInfo: "",
    attendance: "",
  };
  const inputs = [
    {
      name: "attendance",
      type: "radio",
      options: [
        { label: "¡Sí! Confirmo", value: "confirmo" },
        { label: "No puedo :(", value: "no confirmo" },
      ],
    },
    {
      name: "name",
      type: "text",
      placeholder: "Indica tu nombre completo",
    },
    {
      name: "importantInfo",
      type: "text",
      placeholder: "Indica algún dato importante",
    },
  ];
  return (
    <ModalForm
      title="¿Venís a celebrar?"
      inputs={inputs}
      initialValues={initialValues}
      onSubmit={onSubmit}
      submitButtonLabel="Enviar"
    />
  );
}
