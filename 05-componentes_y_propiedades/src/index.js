import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CONSTANTES Y VARIABLES
const user = {
  name: "Cristina",
  lastName: "Sánchez"
}

// FUNCIONES
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
      <dd>Argumentos que pasamos al componente a través de sus atributos. Por ejemplo, la función Welcome tiene la propiedad name y accedemos a ella igual que con un objeto.</dd>
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

function Comment(props){
  return (
    <div className="Comment">
      <CommentAuthor name={props.author.name} lastName={props.author.lastName}></CommentAuthor>
      <CommentText></CommentText>
      <CommentDate></CommentDate>
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
    <hr/>
    <Footnote id="1" description="Los componentes son reutilizables, como ves en estas notas que estamos escribiendo."></Footnote>
    <Footnote id="2" description="Los componentes que tú crees siempre deben empezar con MAYÚSCULA, porque si empiezan por minúscula, React lo tomará como una etiqueta DOM."></Footnote>
    <Footnote id="3" description="Los componentes, pueden formar parte de otros componentes, mira el componente Comment"></Footnote>
    <Footnote id="4" description="Las funciones de un componente nunca deben modificar las entradas."></Footnote>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

