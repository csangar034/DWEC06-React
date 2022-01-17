import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componente hijo: no contienen ningún estado, solo recibe una props
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

// Componente padre
class Board extends React.Component {
  constructor(props) {
    super(props);
    // En el estado del componente padre, se generan 9 Squares y se almacena el estado de cada uno de ellos, que inicialmente están a null => [null, null, null, null, null, null, null, null, null]
    // Conforme se rellene el valor de los componentes, se irán almacenando así => ['O', null, 'X', 'X', 'X', 'O, 'O', null, null]
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  // La función render Square renderiza cada uno de los Square con el valor que tiene en ese momento y con una función para asociada al evento onClick que permitirá actualizar su estado desde el componente padre
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const element = (
  <div>
    <h1>Delegación de estados</h1>
    <p>¿Qué es la delegación de estados?</p>
    <p>Es una técnica para compartir el estado entre varios componentes.</p>
    <p>Ejemplo:
    <ul>
      <li>Supongamos que tenemos un componente padre y 2 componentes hijos.</li>
      <li>Si quisieramos compartir el estado entre los componentes hijos, no lo podríamos hacer, ya que el único flujo de datos que existe en React es únicamente descendiente, es decir, de padres a hijos.</li>
      <li>Para solucionar esto, el estado debemos gestionar su estado en el componente padre, delegando el estado a sus hijos a través de las props y devolviendolo al padre a través de callbacks</li>
    </ul>
    </p>
    <p>¿Cuales son sus ventajas?</p>
    <ul>
      <li>Compartir el estado de un componente</li>
    </ul>
    <hr/>
    <Board />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

