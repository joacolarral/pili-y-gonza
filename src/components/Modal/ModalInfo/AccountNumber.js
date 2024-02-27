import React from "react";
import ModalInfo from ".";
import GiftModal from "../../../icons/gitf_modal";

export default function AccountNumber() {
  return (
    <ModalInfo title="Regalo" icon={<GiftModal />}>
      <p> CBU: 0070327530004074040383 </p>
      <p> Alias: PILIYGONZA16M</p>
      <p> Banco: Galicia</p>
    </ModalInfo>
  );
}
