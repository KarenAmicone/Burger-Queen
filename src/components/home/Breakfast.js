import React from 'react';
import './home.css';
import {OrdersOutput, BreakfastBttns} from './Bcomponents';
import Ticket from './Ticket'


class Breakfast extends React.Component {
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
      <article id="lunch-menu"></article>   
      <main>
        <BreakfastBttns orders= {this.state.orders} addOrder={this.addOrder}/>
          <article id="payments">
            <Ticket/>
          </article>
        </main>
        </section>
        )
        };
        }

export default Breakfast