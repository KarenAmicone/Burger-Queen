import React, {useState} from 'react';
import './home.css';
import 'firebase/firebase-firestore';
import app from 'firebase/app';


//Functions

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};


const NameForm = ({onSubmit}) =>{
const submitToFirebase = (event) => {
  event.preventDefault();
  app.firestore().collection('orders').add({
    clientName: text.value
  })
  .catch(err => {
    console.log(err.message);
  }); 
}

const { resetValue, ...text } = useInputValue("");
return (
<form id ="form-name" onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value); 
        submitToFirebase(e);
      }}>
    <label htmlFor="input-name">
      Nombre del cliente
      </label>
      <br></br>
      <input className="input-name" {...text} />
  </form>
)
}

//HTML components

const PrintingClientName = (props) =>{
  return(
  <article id="order-info">
  <p>Cajero: {props.user}</p>
  <p>No. Orden: {props.count}</p>
  </article>
  )
  } 


const MenuOptions = (props) =>
  <button id= {props.id} className="menu-options" value={props.value} onClick={props.click}>{props.label}</button>

const Ingredients = (props) =>
  <button id= {props.id} className= "ingredients" value={props.value} onClick={props.click}>{props.label}</button>

const LunchOptions = (props) =>
<button id= {props.id} className= "lunch-options" value={props.value}>{props.label}</button>

//Exporting
export {NameForm, PrintingClientName, Ingredients, MenuOptions, LunchOptions}