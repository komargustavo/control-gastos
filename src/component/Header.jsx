import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValiPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? (<ControlPresupuesto
            presupuesto={presupuesto}
            />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValiPresupuesto={setIsValiPresupuesto}
                />

            )}
        </header>
    )
}

export default Header