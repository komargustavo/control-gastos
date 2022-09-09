import { useState } from "react";
import cerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal }) => {
  const handleOcultarModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBtn} alt="Cerrar Modal" onClick={handleOcultarModal} />
      </div>
    </div>
  );
};

export default Modal;
