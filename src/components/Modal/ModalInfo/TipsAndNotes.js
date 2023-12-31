import React from "react";
import ModalInfo from ".";
import Board from "../../../icons/board";

export default function TipsAndNotes() {
  return (
    <ModalInfo title="Tips y Notas" icon={<Board />}>
      <p>
        Al llegar deberán dejar el auto en el estacionamiento señalizado y luego
        caminar 150 metros hasta donde se realizará la ceremonia en la playa.
      </p>
      <p>
        TIP: Hay baños al lado del estacionamiento. Recomendamos pasar antes de
        ir al lugar de la ceremonia. Después queda lejos, y no queremos que se
        hagan encima
      </p>
    </ModalInfo>
  );
}
