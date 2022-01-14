import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logoAlberti from './logoAlberti.png';

/*
 * A TENER EN CUENTA:
 * Las variables, se indican entre {corchetes} para utilizarlas
 * Se pueden haceer operaciones: {2 + 5} --> imprimiría 5
 * También podemos llamar a funciones()
 */

// CONSTANTES Y VARIABLES
const name    = "Cristina"          // Variable con un texto
var user = {                        // Objeto que contiene información sobre un usuario
  name      : "Cristina",
  lastName  : "Sánchez",
  logo      : logoAlberti
}
var element = <h1>Hola {name}</h1>

// FUNCIONES
// Función que devuelve el nombre completo de un usuario
function formatName(user){
  return user.name + " " + user.lastName;
}

// Función que devuelve el saludo con el nombre de un usuario si se conoce o un texto genérico si no se conoce
//user = "";
function getGreeting(user){
  return (user) ? <span>{formatName(user)}</span> : <span>desconocido</span>;
}

// Paso 2: Variable con JSX que hace uso de una función
element = <h1>Hola {formatName(user)}</h1>

// Paso 3: Variable JSX haciendo uso de una función con condicional
//user = "";
element = <h1>Hola {getGreeting(user)}</h1>

// Paso 4: Si necesitamos poner atributos en JSX, podemos utilizar comillas. 
// OJO: No debemos confundir con los atributos JS, éstos tienen que ir con llaves y "."
// ADEMÁS: Si queremos poner un código JSX que ocupe varias líneas, para que nos sea más fácil leerlo y entenderlo, podemos escribirlo entre paréntesis
element = (
  <div tabIndex="0">
    <h1>Hola {getGreeting(user)}</h1>
    <img src={user.logo} alt="Logo del IES Rafael Alberti" />
    <div>
      Primero
    </div>
    <div>
      Segundo
    </div>
  </div>
);


element = (
    <div class="lista_enlaces">
      <p>Aquí tienes algunos enlaces para saber más de JSX:</p>
      <ul>
        <li><a href="https://es.reactjs.org/docs/introducing-jsx.html" target="_blank">[OFICIAL] Introduccion a JSX</a></li>
        <li><a href="https://es.reactjs.org/docs/jsx-in-depth.html" target="_blank">[OFICIAL] JSX en profundidad</a></li>
        <li><a href="https://carlosazaustre.es/jsx-para-novatos" target="_blank">JSX para novatos</a></li>
        <li><a href="https://www.w3schools.com/react/react_jsx.asp" target="_blank">[W3Schools] React JSX</a></li>
        <li><a href="https://dev.to/sapardo/jsx-el-lenguaje-de-react-con-ejemplos-4hc2" target="_blank">Ejemplos JSX</a></li>
      </ul>
    </div>
);

// RENDERIZADO
ReactDOM.render(
  element,
  document.getElementById('root')
);