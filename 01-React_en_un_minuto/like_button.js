'use strict';

const e = React.createElement;

// Componente LikeButton
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // Pintar el botón
  render() {
    if (this.state.liked) {
      return 'Te gusta el componente nº ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Me gusta'
    );
  }
}

// Seleccionamos a traves del DOM todos los componentes con la clase "like_button_container"
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Obtenemo sel identificador del elemento en el que nos encontramos
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });