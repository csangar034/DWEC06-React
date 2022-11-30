import './App.css';
import { useState } from "react";
import { evaluate } from 'mathjs'
import Boton from "./components/Boton"
import BotonClear from "./components/BotonClear"
import Pantalla from "./components/Pantalla"
import freecodecampLogo from "./imgs/freeCodeCamp_white_logo.png"

function App() {

  const [ input, setInput ] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };

  const clearInput = val => {
    setInput("");
  }

  const execInput = val => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Por favor, indique valores");
    }
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freecodecampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={execInput}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClick={clearInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
