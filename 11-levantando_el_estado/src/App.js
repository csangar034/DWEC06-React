import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Conversor de temperaturas
        </p>
      </header>
      <div className="App-body">
        <Calculator />
      </div>
    </div>
  );
}

export default App;