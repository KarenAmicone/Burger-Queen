import React from 'react';
import './home.css';

const MenuOptions = (props) =>
  <button id= {props.id} className="menu-options" value={props.value} onClick={props.click}>{props.label}</button>

const Ingredients = (props) =>
  <button id= {props.id} className= "ingredients" value={props.value} onClick={props.click}>{props.label}</button>

const LunchOptions = (props) =>
<button id= {props.id} className= "lunch-options" value={props.value}>{props.label}</button>

//Exporting
export {Ingredients, MenuOptions, LunchOptions}