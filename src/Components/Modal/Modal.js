import "./_Modal.scss";

import ModalForm from "./ModalForm/ModalForm";
import { useEffect } from "react";

export default function Modal({ closeModal }) {
  const onBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    const escape = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("keydown", escape);
      document.body.style.overflow = "unset";
    };
  }, [closeModal]);
  return (
    <div className="backdrop" onClick={onBackdropClick}>
      <div className="modal container">
        <p className="modal__text">Оставьте свои данные, мы вам перезвоним</p>
        <ModalForm closeModal={closeModal} />
      </div>
    </div>
  );
}
