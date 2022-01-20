import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componente de clase
/*class MyClassComponent extends React.Component{
    static getDerivedStateFromProps(props, state){}
    constructor(props){super(props);}
    componentDidMount(){} // Solo se ejecuta 1 vez después del primer render
    componentWillUnmount(){} // Solo se ejecuta 1 vez al final del ciclo de vida del componente
    componentDidUpdate(prevProps, prevState){}
    shouldComponentUpdate(nextProps, nextState){}
    render()
 };*/

// Componente funcional
const Counter = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter(counter => counter + 1), 1000
    );
    return () => clearInterval(interval);
  });

  return <p>I'm a Hook that count seconds... {counter}</p>
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
); 
