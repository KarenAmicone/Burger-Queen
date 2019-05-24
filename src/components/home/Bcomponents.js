import React from 'react';
import './home.css';
import MenuList from '../home/menu.json';
import app from 'firebase/app';
import 'firebase/firebase-firestore';

const menuBreakfast = MenuList.menu[0].options;

class BreakfastBttns extends React.Component{
  state={
    label:null,
    price: null,
    id: null, 
    ingredients: [],
  };

  handleClickOptions = (e) => {
      e.preventDefault();
      if(e.target.className === "menu-options"){
        this.setState({
            label: e.target.name,
            price: `/$${e.target.value}`,
            id: e.target.id,
        });
      } else {
        if(this.state.id === "sandwich"){
          this.setState({
              ingredients: `SIN ${e.target.name}`
          });
        }  
      }
    };
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addOrder(this.state)
    this.setState({
      ingredients: null,
    })
  }

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
      <article id="breakfast-grid">
      {menuBreakfast.map(menu => (
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

const OrdersOutput = ({orders, deleteOrder}) => {
  return( 
    <table>
    <tbody>
    {orders.map(order=>
      <tr key={order.id}>
      <td>{order.label}</td>
      <td>{order.price}</td>
      <td>{order.ingredients}</td>
      <td> <button onClick={()=> {deleteOrder(order.id)}}><i className="material-icons">delete_outline</i></button> </td>
      </tr>
      )}
    </tbody>
  </table>
  )
};



  

export {BreakfastBttns, OrdersOutput}