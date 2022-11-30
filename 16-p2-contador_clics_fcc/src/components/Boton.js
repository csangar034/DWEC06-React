import React from 'react';
import '../css/Boton.css';

function Boton({ txt , isClick, handlerClick }){
    return (
        <button
            className={ isClick ? 'boton-click' : 'boton-reiniciar' }
            onClick={handlerClick}
        >
            { txt }
        </button>
    );
}

export default Boton;