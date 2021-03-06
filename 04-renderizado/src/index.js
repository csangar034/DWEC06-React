import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Paso 1: cómo funciona el renderizado en React
var element = (
  <div>
    <p><b>Render</b>: es un anglicismo que se puede traducir como "pintar"</p>
    <p>¿Cómo funciona?</p>
    <ol>
      <li>Crea un proyecto react y quédate sólo con los ficheros src/index.css y src/index.js</li>
      <li>Inspecciona en el navegador tu código, hasta que encuentres la el nodo raíz (id=root)</li>
      <li>Con React, tenemos un único nodo raíz, el cual se actualiza renderizándolo.</li>
      <li>Además, podremos tener tantos bloques diferentes como queramos, y actualizarlos independientemente unos de otros. El DOM de React es el que se encarga de ello. Por esta razón, React es una librería perfecta para construir SPA.</li>
    </ol>
    <hr/>
    <div id="reloj"></div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

// Paso 2: creamos un reloj, el cual se actualiza a cada segundo usando la función setInterval()

// CONDICIONALES
// Podemos evaluar condicionales de la manera que ya conocemos, con la ternaria...
// ... o utilizar un nuevo operador que incorpora JSX: &&
const parImpar = (num) => (
  <span>
    {(num % 2) ? "impar" : "par"}
    {(num % 2 !== 0) && <strong>!!!!!</strong>}
  </span>
);

// SWITCH
// Los switch los podemos hacer de la forma cásica que conocemos...
const dayOfWeek = (day) => {
  switch(day){
    case 0: return <span>Domingo</span>;
    case 1: return <span>Lunes</span>;
    case 2: return <span>Martes</span>;
    case 3: return <span>Miércoles</span>;
    case 4: return <span>Jueves</span>;
    case 5: return <span>Viernes</span>;
    case 6: return <span>Sábado</span>;
    default: return <span>¡Desconocido!</span>;
  }
}

// ... o con estructuras AND y OR, de tal manera que tendremos un comportamiento más compacto
const dayOfWeek2 = (day) => 
  (day == 0) && <span>Domingo</span> || 
  (day == 1) && <span>Lunes</span> || 
  (day == 2) && <span>Martes</span> || 
  (day == 3) && <span>Miércoles</span> || 
  (day == 4) && <span>Jueves</span> || 
  (day == 5) && <span>Viernes</span> || 
  (day == 6) && <span>Sábado</span> || 
  <span>¡Desconocido!</span>;



function tick(){

  let now = new Date();

  const element = (
    <div>
      <h1>Reloj</h1>
      <h2>Son las {now.toLocaleTimeString()}</h2>
      <div>(Segundo: {parImpar(now.getSeconds())})</div>
      <div>Hoy es {dayOfWeek(now.getDay())}</div>
      <div>Hoy es {dayOfWeek2(now.getDay())}</div>
      <hr/>
      <p><b>NOTA</b>: A tener en cuenta, estamos llamando a la función de renderizado una vez cada segundo, pero la forma correcta de hacer este reloj es llamando sólo 1 vez a la función render (lo veremos más adelante).</p>
      <ol>
        <li>Inspecciona de nuevo el código en tu navegador</li>
        <li>Verás que, a pesar de que se llame una vez cada segundo al render, React solo actualiza lo que es neceario.</li>
      </ol>
    </div>
  );
  // Aquí, en vez de pintar cada segundo en el elemento root, selecciono el elemento "reloj", dejando el resto de la pantalla como estaba
  ReactDOM.render(element, document.getElementById("reloj"));
}

setInterval(tick, 1000);