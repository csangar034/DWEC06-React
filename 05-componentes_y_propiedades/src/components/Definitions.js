import React from 'react';

function Definitions(){
    return (<div>
      Definimos...
      <dl>
        <dt><b>Componente</b></dt>
        <dd>Parte de la interfaz (Más información <a href="https://es.reactjs.org/docs/react-component.html">aquí</a>.). Por ejemplo, Title y Welcome son componentes de esta interfaz y son independientes entre sí. Se pueden comparar con las funciones JavaSciript.</dd>
        <dt><b>Propiedad</b></dt>
        <dd>Argumentos que pasamos al componente a través de sus atributos. Por ejemplo, la función Welcome tiene la propiedad name y accedemos a ella a través del objeto <i>props</i>.</dd>
      </dl>
    </div>);
  }

export default Definitions;