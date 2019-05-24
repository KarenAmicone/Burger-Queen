import React from 'react';
import './home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <article id="order-info">
            <p>Cliente: </p>
            <p>No. Orden: </p>
          </article>
          <button className="ready">Salir</button>
          </header>

        <Route exact path="/home" component={HomeRendering}/>
        <Route exact path="/home/desayuno" component={Breakfast} />
        <Route exact path="/home/comida" component={Lunch} />
        <Route exact path="/home/historial-de-pedidos" component={Orders}/>
        
    </Router>
  );
}


class HomeRendering extends React.Component {
  state={
    name: "",
    order: 0
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      order: this.state.order +1
    })
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state.name)
  }
render(){
  return (
    <>
    <header>
    
    </header>
    <section>
      <article id="lunch-menu"></article>   
      <main>
        <section id="wrapper">
        <form id ="form-name" onSubmit={this.handleSubmit}>
            <label htmlFor="input-name">
              Nombre del cliente
              </label>
              <br></br>
              <input type="text" onChange={this.handleChange} className="input-name"/>
          </form>
        </section>
        <article id="payments">
        </article>
      </main>
    </section>
    </>
    )
}
}

export default Home;