import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEmpleado from "./empleados/AgregarEmpleado";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<ListadoEmpleados />} />
        <Route path="/agregar" element={<AgregarEmpleado/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
