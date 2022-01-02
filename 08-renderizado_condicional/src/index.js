import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UserGreeting(props) {
  return <h1>Bienvenido</h1>;
}

function GuestGreeting(props) {
  return <h1>Por favor, inicia sesión</h1>;
}

// Texto en función del estado
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Función que crea un botón para iniciar sesión
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Iniciar sesión
    </button>
  );
}

// Función que crea un botón para cerrar sesión
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Cerrar sesión
    </button>
  );
}

// Heredamos de React.Component para usarlo como componente
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // Agregamos los eventos al componente
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //Por defecto, estamos sin loguear
    this.state = {isLoggedIn: false};
  }

  // Evento que cambia el estado a logueado
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  // Evento que cambia el estado a no logueado
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  // Renderizado
  render() {

    const isLoggedIn = this.state.isLoggedIn;
    let button;

    // En función del falor de la variable isLoggedIn, pintamos un botón u otro
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // Devolvemos el texto correspondiente al estado y el botón
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Tiene {unreadMessages.length} mensajes sin leer.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
const element = (
  <div>
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    El renderizado condicional se puede implementar utilizando:
    <ul>
      <li>Operador if (ver en Greeting)</li>
      <li>Operador if-else (ver en el método render() de LoginControl)</li>
      <li>Operador lógico && en JSX (ver el componente Mailbox)</li>
      <li>Operador ternario [(condicion)? true : false ] en JSX</li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
