import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // Los campos del formulario siempre tendrán el valor en this.state, permitiendo que sea controlado desde el componente
    this.state = {
      name: "",
      accepted: "checked",
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Este método se ejecutará cuando algún elemento del formulario cambie su valor, luego, con el método setState() actualizaremos su estado
  handleInputChange(event) {
    //console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Este método siempre se ejecutará cada vez que se pulse una tecla para actualziar el estado de React
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <h1>Formulario con componentes de clase</h1>
        <form className='row' onSubmit={this.handleSubmit}>
          <div className="col-md-3">
            <label>
              Nombre:
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="col-md-3">
            <label>
              Aceptar:
              <input
                name="accepted"
                type="checkbox"
                checked={this.state.accepted}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="col-md-3">
            <label>
              Edad:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="col-md-3">
            <button className='btn btn-primary' type='submit'>Enviar</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })

  // Función que se ejecuta cada vez que un valor cambia a través del evento onChange
  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  // Función para gestionar el submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datos.nombre + " " + datos.apellido)
  }

  return(
    <Fragment>
      <h1>Formulario con componentes funcionales</h1>
      <form className='row' onSubmit={handleSubmit}>
        <div className="col-md-3">
          <input 
            placeholder='Nombre'
            className='form-control'
            type='text'
            name='nombre'
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <input 
            placeholder='Apellido'
            className='form-control'
            type='text'
            name='apellido'
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className='btn btn-primary' type='submit'>Enviar</button>
        </div>
      </form>
    </Fragment>
  )
}

const element = (
  <div>
    <h1>Formularios en React</h1>
    <p>Los formularios en React funcionan de una manera diferente a otros elementos del DOM de React porque incorporan algún estado interno.</p>
    <p>Para el envío del formulario y el acceso a los datos se necesita una función en JavaScript que se encargue de ello. Esto se llama <b>componentes controlados</b></p>
    <div className='container mt-5'>
      <MyForm />
    </div>
    <div className='container mt-5'>
      <Formulario />
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

