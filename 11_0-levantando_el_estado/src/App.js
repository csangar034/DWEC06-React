import './App.css';
import Input from './Input.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Levantamiento del estado (I)
        </p>
      </header>
      <div className="App-body">
        <Input />
        <p>Introduzca texto en el input</p>
      </div>
    </div>
  );
}

export default App;
