import React from 'react';
import './home.css';
import {BreakfastOutput, BreakfastBttns} from './Bcomponents';


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

  render(){
  return (
      <section>
      <article id="lunch-menu"></article>   
      <main>
        <BreakfastBttns addOrder={this.addOrder}/>
          <article id="payments">
            <BreakfastOutput orders={this.state.orders}/>
          </article>
        </main>
        </section>
        )
        };
        }

export default Breakfast