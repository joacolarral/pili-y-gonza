import React from "react";
import ModalForm from "..";

export default function SongSuggest({ onSubmit }) {
  const initialValues = {
    name: "",
    author_song: "",
    link_song: "",
  };
  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Tu nombre",
    },
    {
      name: "author_song",
      type: "text",
      placeholder: "Nombre canción y autor",
    },
    {
      name: "link_song",
      type: "text",
      placeholder: "Si querés poné el link de Youtube, Spotify, etc.",
    },
  ];
  return (
    <ModalForm
      title="Sugerir Canción"
      inputs={inputs}
      initialValues={initialValues}
      onSubmit={onSubmit}
      submitButtonLabel="Enviar"
    />
  );
}
