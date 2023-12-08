import React from "react";
import ModalInfo from ".";
import GiftModal from "../../../icons/gitf_modal";

export default function AccountNumber() {
  return (
    <ModalInfo title="Regalito" icon={<GiftModal />}>
      <p>
        Tenemos una cuenta en pesos para todos aquellos interesados en
        transferir:
      </p>
      <p> CBU: 0170352640000031783422 </p>
      <p> Alias: BELU.JUAN.BODA </p>
      <p> Banco: BBVA</p>
      <p>
        Si quisieran hacer un regalo en otra moneda 😉, lamentablemente no
        tenemos cuenta, pero va a haber una alcancía mágica el día del
        casamiento.
      </p>
    </ModalInfo>
  );
}
