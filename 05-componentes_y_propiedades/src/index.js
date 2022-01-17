import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CONSTANTES Y VARIABLES
const user = {
  name: "Cristina",
  lastName: "Sánchez"
}

// FUNCIONES
// Componentes funcionales
function Title(){
  return <h1>Componentes y propiedades</h1>
}

function Welcome(props){
  return <h2>Bienvenid@ {props.name}</h2>
}

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

function CommentAuthor(props){
  return <div>{props.name} {props.lastName}</div>
}

function CommentText(){
  return <div class="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque egestas urna ut sagittis. Praesent maximus tempus ligula ac lacinia. Morbi et diam metus. Quisque sit amet augue diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Quisque non accumsan dolor. Fusce euismod ex eros.</div>
}

function CommentDate(){
  let thisDate = new Date();
  return <div class="commentDate">{thisDate.getDate()}/{thisDate.getMonth()}/{thisDate.getFullYear()}</div>
}

// Componente de tipo clase, heredando/extendiendo de React.Component
class Comment extends React.Component {
  render(){
    return (
      <div className="Comment">
        <CommentAuthor name={this.props.author.name} lastName={this.props.author.lastName}></CommentAuthor>
        <CommentText></CommentText>
        <CommentDate></CommentDate>
      </div>
    );
  };
}

function HowItWorks(){
  return (
    <div>
      <h1>¿Cómo funcionan?</h1>
      <ol>
        <li>Se declara el componente. Tenemos 2 formas de hacerlo:</li>
        <ol>
          <li>A través de funciones, lo que se denomina <i>componentes funcionales</i> (por ejemplo, el componente <i>HowItWorks()</i>)</li>
          <li>A través de una clase ES6 de JavaScript, en este caso, debemos heredar de <i>React.Component</i> (por ejemplo, el componente <i>Comment</i>). En este caso, la clase Component se encarga de recibir las props y colocarlas en el objeto this para que estén disponibles en nuestro componente, sin tener que recibirlo como parámetro de entrada.</li>
        </ol>
        <li>A través de ReactDom.render(), llamamos al componente</li>
        <li>Se ejecuta el componente y se sustituyen los valores de las props</li>
        <li>Se devuelve un resultado</li>
        <li>ReactDOM actualiza eficientemente el DOM con los nuevos valores</li>
      </ol>
    </div>
  );
}

function Footnote(props){
  return <sub><b>NOTA {props.id}:</b> {props.description}<br/></sub>
}

const element = (
  <div>
    <Title></Title>
    <Welcome name={user.name}></Welcome>
    <Definitions></Definitions>
    <Comment author={user}></Comment>
    <HowItWorks></HowItWorks>
    <hr/>
    <Footnote id="1" description="Los componentes son reutilizables, como ves en estas notas que estamos escribiendo."></Footnote>
    <Footnote id="2" description="Los componentes que tú crees siempre deben empezar con MAYÚSCULA, porque si empiezan por minúscula, React lo tomará como una etiqueta DOM."></Footnote>
    <Footnote id="3" description="Los componentes, pueden formar parte de otros componentes, mira el componente Comment"></Footnote>
    <Footnote id="4" description="Las funciones de un componente nunca deben modificar las entradas."></Footnote>
    <Footnote id="5" description="Podemos llamar a multiples componentes dentro de un componente."></Footnote>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

