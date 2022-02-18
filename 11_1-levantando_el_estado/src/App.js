import React, { useState } from 'react';
import './App.css';
import Input from './Input.js';

function App() {

  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setNombre(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Levantamiento del estado (II)
        </p>
      </header>
      <div className="App-body">
        <Input nombre={nombre} handleChange={handleChange} />
        {
          ( nombre.length > 0 ) ? <p>Hola {nombre}</p> : <p>Introduzca texto en el input</p>
        }
      </div>
    </div>
  );
}

export default App;
