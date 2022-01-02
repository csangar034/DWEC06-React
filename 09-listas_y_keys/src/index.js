import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// array de numeros, los cuales multiplicamos por 2 usando .map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// Para pintarlos en JSX, los almacenamos en una variable de forma similar a la anterior:
const listItems = numbers.map((number) => <li>{number}</li>);

// Normalmente, renderizamos listas en los componentes
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

// Extracción de un componente para construir una lista
function ListItem(props) {
  // Correcto! No hay necesidad de especificar la key aquí:
  return <li>{props.value}</li>;
}

function NumberListWithListItems(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correcto! La key debería ser especificada dentro del array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const element = (
  <div>
    <h1>Listas y keys</h1>
    <div>
    <p>Renderizamos una lista de numeros con JSX</p>
      <ul>
        {listItems}
      </ul>
    </div>
    <div>
      <p>Renderizamos una lista de números en un componente sin olvidarnos de asignarle una clave única a cada item de la lista. Esto ayudará a React a identificar aquellos items que han cambiado para poder volverlos a renderizar, agregar nuevos items o eliminar</p>
      <NumberList numbers={numbers} />
    </div>
    <div>
      Pero en React, la forma correcta de asignar claves a una lista de elementos es la siguiente:
      <NumberListWithListItems numbers={numbers} />
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

