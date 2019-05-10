import React, {useState} from 'react'
import './home.css'
import 'firebase/firebase-firestore'
import app from 'firebase/app'
import ReactDOM from 'react-dom'

function PrintingClientName (props) {
      return <article id="order-info">
      <p>Cajero: {props.user}
      <br></br>
      Cliente: {props.name}
      <br></br>
      No. Orden: {props.count}</p>
      </article>
}

function MainButtons (props){
 return <button onClick= {props.function} className= "main-bttn" value={props.value}>{props.label}</button>
}

function MenuOptions (props){
return <button id= {props.id} className="menu-options" value={props.value}>{props.label}</button>
}

function Ingredients (props){
return <button id= {props.id} className= "ingredients" value={props.value}>{props.label}</button>
}

function ClickBreakfast (){
const element = <article id="breakfast-grid">
<MenuOptions id="sandwich" label="SANDWICH DE JAMON Y QUESO"/> 
<MenuOptions id="coffe-a" label="CAFÉ AMERICANO"/>
<MenuOptions id="coffe-l" label="CAFÉ CON LECHE"/>  
<MenuOptions id="juice" label="JUGO NATURAL"/> 
<Ingredients id="lettuce" label="LECHUGA"/>
<Ingredients id="carrot" label="ZANAHORIA"/>
<Ingredients id="onion" label="CEBOLLA"/>
<Ingredients id="chile" label="CHILE"/>
</article>
ReactDOM.render(element, document.getElementById('wrapper'));
}

/* function ClickLunch (){
  const element = <article id="lunch-grid">
  <MenuOptions id=""/>
  </article>
  ReactDOM.render(element, document.getElementById('wrapper'));
  } */

function HomeRendering () {
  const [name, setName] = useState("");
  const submitToFirebase = (event) => {
          event.preventDefault();
          app.firestore().collection('orders').add({
            clientName: {name}
        })
        .catch(err => {
            console.log(err.message);
        }); 
      }

return (
<main>
    <MainButtons label="DESAYUNO" function={ClickBreakfast}/>
    <MainButtons label="COMIDA"/>
    <MainButtons label="NUEVO PEDIDO"/>
    <MainButtons label="HISTORIAL DE PEDIDOS"/>
    <PrintingClientName name={name}/>
    <button className="ready">Pedido listo</button>
    <section id="wrapper">
    <form id ="form-name" onSubmit={submitToFirebase}>
    <label htmlFor="input-name">
      Nombre del cliente
      </label>
      <br></br>
      <input
        className="input-name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      /> 
      <br></br>
    <input type="submit" value="Enviar" />
  </form>
    </section>
    <article id="payments">
    </article>
  </main>
  )
}

export default HomeRendering