import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";

function App() {
  return (
    <div className="container">
      <Navegacion></Navegacion>
      <ListadoEmpleados></ListadoEmpleados>
    </div>
    
  );
}

export default App;
