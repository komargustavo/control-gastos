import { useState } from "react";
import Header from "./component/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValiPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValiPresupuesto={setIsValiPresupuesto}
      />
    </div>
  );
}

export default App;