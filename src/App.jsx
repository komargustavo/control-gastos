import { useState } from "react";
import Header from "./component/Header";
import ListadoGastos from "./component/ListadoGastos";
import Modal from "./component/Modal";
import { generarId } from "./helpers";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValiPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha=Date.now()
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
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
        <>
        <main>
          <ListadoGastos gastos={gastos}/>
        </main>
          <div className="nuevo-gasto">
            <img
              src={iconoNuevoGasto}
              alt="Icono Nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      )}
    </div>
  );
}

export default App;
