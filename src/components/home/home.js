import React, {useState} from 'react';
import './home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {NameForm, PrintingClientName} from './components';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Orders from './Orders';

function Home() {
  return (
    <Router>
      <header>
          <button className= "main-bttn">
            <Link className= "link" to="/home/desayuno">DESAYUNO</Link>
          </button>
          <button className= "main-bttn">
            <Link className= "link" to="/home/comida">COMIDA</Link>
          </button>
          <button className= "main-bttn">
            <Link className= "link" to="/home">NUEVO PEDIDO</Link>
          </button>
          <button className= "main-bttn">
            <Link className= "link" to="/home/historial-de-pedidos">HISTORIAL DE PEDIDOS</Link>
          </button>
          <PrintingClientName /* name={name.map(({ text }) => (
          <p>Cliente: {text}</p>))} *//>
          <button className="ready">Pedido listo</button>
          </header>

        <Route exact path="/home" component={HomeRendering} />
        <Route exact path="/home/desayuno" component={Breakfast} />
        <Route exact path="/home/comida" component={Lunch} />
        <Route exact path="/home/historial-de-pedidos" component={Orders}/>
        
    </Router>
  );
}


function HomeRendering () {
  const [name, setName] = useState([]);
return (
  <section>
    <article id="lunch-menu"></article>   
    <main>
      <section id="wrapper">
      <NameForm onSubmit={text => setName([{ text }, ...name])}/>
      </section>
      <article id="payments">
      </article>
    </main>
  </section>
  )
}

export default Home;