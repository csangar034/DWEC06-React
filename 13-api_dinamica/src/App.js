
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Contacto from "./Components/Contacto";
import Inicio from "./Components/Inicio";
import Nosotros from "./Components/Nosotros";
import Usuarios from "./Components/Usuarios";

function App() {
  return (
    <Router>
      <div className="container mt-5">
      <div className="btn-group">
        <Link className="btn btn-dark btn-sm" to="/">
          Inicio
        </Link>
        <Link className="btn btn-dark btn-sm" to="/nosotros">
          Nosotros
        </Link>
        <NavLink className="btn btn-dark btn-sm" activeclassname="active" to="/contacto">
          Contacto
        </NavLink>
        </div>

        <hr />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />          
          <Route path="/nosotros/:id" element={<Usuarios/>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
