import React from "react";
import ModalInfo from ".";
import GiftModal from "../../../icons/gitf_modal";

export default function AccountNumber() {
  return (
    <ModalInfo title="Regalo" icon={<GiftModal />}>
      <p> CBU: 0720429088000036008873 </p>
      <p> Alias: Piligonza16324</p>
      <p> Banco: Santander</p>
    </ModalInfo>
  );
}
