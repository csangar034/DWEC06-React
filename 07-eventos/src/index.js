import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Click para mostrar' : 'Click para ocultar'}
      </button>
    );
  }
}

function EventDiv(){
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(false)}>Dejar de mostrar</button>
      { mostrar ? <MouseColor /> : null }
    </div>
  );
}

function MouseColor(){
  const [color, setColor] = useState("orange");

  useEffect(() => {
    function onMouseMove(evento){
      if(evento.clientX < window.innerWidth / 2){
        setColor("orange");
      }
      else{
        setColor("blue");
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  });

  return <div style={{height: "100px", background: color}} />;
}

const element = (
  <div>
    <h1>Eventos</h1>
    <div>
      A tener en cuenta:
      <ul>
        <li>IMPORTANTE: los eventos en React se nombran usando la nomenclatura <a href="https://es.wikipedia.org/wiki/Camel_case">camelCase</a></li>
        <li>Además, en JSX se utilizan funciones en lugar de cadenas de catacteres.</li>
        <li>Para parar la propagación y el comportamiento de los eventos por defecto, se debe utilizar explícitamente <i>e.preventDefault()</i> (ya no funcionará devolver <i>false</i> en la función que llamamos en el manejador)</li>
      </ul>
    </div>
    <Toggle />
    <hr/>
    <EventDiv />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
