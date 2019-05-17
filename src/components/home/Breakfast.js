import React from 'react';
import './home.css';
import {OrdersOutput, BreakfastBttns} from './Bcomponents';


class Breakfast extends React.Component {
  state = {
    orders: [
      {
        label: null,
        price: null,
        id: null
    }
    ]
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
    })
  }

  render(){
  return (
      <section>
      <article id="lunch-menu"></article>   
      <main>
        <BreakfastBttns addOrder={this.addOrder}/>
          <article id="payments">
            <OrdersOutput orders={this.state.orders} deleteOrder={this.deleteOrder}/>
          </article>
        </main>
        </section>
        )
        };
        }

export default Breakfast