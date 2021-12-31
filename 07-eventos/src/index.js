import React from 'react';
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
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
