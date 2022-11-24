import React from 'react';
import '../index.css';

/**
 * Componente que renderiza una casilla del tablero
 * 
 * @param {*} props - props que contiene el valor de la propiedad y el método onClick a ejecutar
 * 
 * @returns 
 */
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;