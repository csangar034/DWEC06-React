import './App.css';
import freeCodeCampLogo from "./imgs/freeCodeCamp_white_logo.png"
import ListaDeTareas from "./components/ListaDeTareas"

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
      
    </div>
  );
}

export default App;
