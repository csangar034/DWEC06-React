import React from 'react';
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
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Este método siempre se ejecutará cada vez que se pulse una tecla para actualziar el estado de React
  handleSubmit(event) {
    console.log(this.state);
    //event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="#">
        <label>
          Nombre:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Aceptar las condiciones:
          <input
            name="accepted"
            type="checkbox"
            checked={this.state.accepted}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input 
          type="submit"
          name="submit"
          value="Enviar"
        />
      </form>
    );
  }
}

const element = (
  <div>
    <h1>Formularios en React</h1>
    <p>Los formularios en React funcionan de una manera diferente a otros elementos del DOM de React porque incorporan algún estado interno.</p>
    <p>Para el envío del formulario y el acceso a los datos se necesita una función en JavaScript que se encargue de ello. Esto se llama <b>componentes controlados</b></p>
    <MyForm />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

