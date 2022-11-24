import './App.css';
import { useState } from 'react';
import freeCodeCampLogo from './imgs/freeCodeCamp_white_logo.png';
import Boton from './components/Boton'
import Counter from './components/Counter'

function App() {

  const [ numClics, setNumClics ] = useState(0);

  const handlerClick = () => {
    setNumClics(numClics + 1);
  }

  const restartCounter = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className="freecodecamp-logo" 
          src={freeCodeCampLogo} 
          alt="Logo de Free Code Camp"
        />
      </div>
      <div className='main_counter'>
        <Counter 
          numClics={numClics}
        />
        <Boton 
          txt="Click" 
          isClick={true}
          handlerClick={handlerClick}
        />
        <Boton 
          txt="Reiniciar" 
          isClick={false}
          handlerClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
