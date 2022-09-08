import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValiPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {/* Con un ternario se controla si el presupuesto es valido y se carga el componente 
            "ControlPresupuesto", casocontrario carga el componente "NuevoPresupuesto" */}

      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValiPresupuesto={setIsValiPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
