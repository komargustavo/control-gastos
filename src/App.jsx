import { useState } from "react";
import Header from "./component/Header";
import Modal from "./component/Modal"
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValiPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValiPresupuesto={setIsValiPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img
            src={iconoNuevoGasto}
            alt="Icono Nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal}/>}
    </div>
  );
}

export default App;
