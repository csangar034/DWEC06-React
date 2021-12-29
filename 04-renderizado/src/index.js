import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Paso 1: cómo funciona el renderizado en React
var element = (
  <div>
    <ol>
      <li>Crea un proyecto react y quédate sólo con los ficheros src/index.css y src/index.js</li>
      <li>Inspecciona en el navegador tu código, hasta que encuentres la el nodo raíz (id=root)</li>
      <li>Con React, tenemos un único nodo raíz, el cual se actualiza renderizándolo</li>
      <li>Además, podremos tener tantos bloques diferentes como queramos, y actualizarlos independientemente unos de otros. El DOM de React es el que se encarga de ello.</li>
    </ol>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// Paso 2: creamos un reloj, el cual se actualiza a cada segundo usando la función setInterval()
function tick(){
  const element = (
    <div>
      <h1>Reloj</h1>
      <h2>Son las {new Date().toLocaleTimeString()}.</h2>
      <hr/>
      <p><b>NOTA</b>: A tener en cuenta, estamos llamando a la función de renderizado una vez cada segundo, pero la forma correcta de hacer este reloj es llamando sólo 1 vez a la función render (lo veremos más adelante).</p>
      <ol>
        <li>Inspecciona de nuevo el código en tu navegador</li>
        <li>Verás que, a pesar de que se llame una vez cada segundo al render, React solo actualiza lo que es neceario.</li>
      </ol>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);


