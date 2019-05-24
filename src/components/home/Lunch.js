import React from 'react';
import './home.css';
import { MenuOptions } from './components';
import {OrdersOutput} from './Bcomponents'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuList from './menu.json';
import app from 'firebase/app';
import 'firebase/firebase-firestore';

function Lunch(){
    return (
        <Router>
            <article id="lunch-menu">
            <button id= "hamburguer" className= "lunch-options">
                <Link className= "link" to="/home/comida/hamburguesas">HAMBURGUESA</Link>
            </button>
            <button id= "extras" className= "lunch-options">   
                <Link className= "link" to="/home/comida/guarnicion">GUARNICION</Link>
            </button>
            <button id= "drinks" className= "lunch-options">
                <Link className= "link" to="/home/comida/bebidas">BEBIDAS</Link>
            </button>
            <button id= "promos" className= "lunch-options">
                <Link className= "link" to="/home/comida/promos">PROMOCIONES</Link>
            </button>
                </article>

            <Route exact path="/home/comida" component={LunchRendering}/>
            <Route path="/home/comida/hamburguesas" component={Hamburger}/>
            <Route path="/home/comida/guarnicion" component={Extras}/>
            <Route path="/home/comida/bebidas" component={Drinks}/>
            <Route path="/home/comida/promos"/>

        </Router>
          )
        }

  function LunchRendering () {
  return (
      <main>
        <section id="wrapper">
        </section>
        <article id="payments">
        </article>
      </main>
    )
  }

  const menuLunch = MenuList.menu[1].options;

    class Hamburger extends React.Component {
      state = {
        orders: []
      };
    
      addOrder = (order) => {
        let orders = [...this.state.orders, order];
        this.setState({
          orders: orders
        });
      };

      deleteOrder = (id) => {
        let orders = this.state.orders.filter(order=>{
          return order.id !== id
        });
        this.setState({
          orders: orders
        });
      };

      render(){
      return (
          <section>   
          <main>
            <LunchBttns addOrder={this.addOrder} orders= {this.state.orders}/>
              <article id="payments">
                <OrdersOutput orders={this.state.orders} deleteOrder={this.deleteOrder}/>
              </article>
            </main>
            </section>
            )
            };
            }

    class LunchBttns extends React.Component{
      state={
        label:null,
        price: null,
        id: null,
        ingredients: null 
      };
      
      handleClickOptions = (e) => {
        e.preventDefault();
        if(e.target.value !== "type"){
          this.setState({
              label: e.target.name,
              price: `/$${e.target.value}`,
              id: e.target.id,
          });
        } else {
          if(this.state.id === "single" || this.state.id === "double"){
            this.setState({
                ingredients: `${e.target.name}`
            });
          }  
        }
        };
        
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addOrder(this.state);
        this.setState({
          ingredients: null,
        })
      };

      handleOrder = (e) =>{
        e.preventDefault();
        app.firestore().collection('orders').add({
          orders: this.props.orders.map(order=> {
            return {
            name: order.label,
            price: order.price,
            id: order.id,
            ingredients: order.ingredients 
          }
          })
        }).then(console.log(this.props.orders))
      }
    
      render(){
        return (
          <section id="wrapper">
          <article id="lunch-grid">
          {menuLunch.map(menu => (
            <button
            onClick = {this.handleClickOptions}
            id={menu.id}
            name={menu.label}
            value={menu.value}
            key={menu.id}
            className={menu.class}
            >{menu.label}</button>
          ))} 
          </article>
          <article id="ordering-bttns-grid">
            <button className= "purple-bttns" onClick={this.handleSubmit}>AÑADIR</button>
            <button className= "purple-bttns" onClick={this.handleOrder}>TERMINAR PEDIDO</button>
          </article>
        </section>
            )
      } 
    };

        

const Extras = () =>{
    return(
    <main>
        <section id="wrapper">
            <article id="extras-grid">
            {MenuList.menu[1].extras.map(extra=> (
              <MenuOptions
                label={extra.label}
                id={extra.id}
                value={extra.value}
              />
            ))}
            </article>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

const Drinks = () =>{
    return(
    <main>
        <section id="wrapper">
            <article id="drinks-grid">
            <h3 id="soda-title">REFRESCO</h3>
            <h3 id="water-title">AGUA</h3>
            {MenuList.menu[1].drinks.map(drink=> (
              <MenuOptions
                label={drink.label}
                id={drink.id}
                value={drink.value}
              />
            ))}
            
            </article>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

export default Lunch