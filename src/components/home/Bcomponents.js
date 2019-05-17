import React from 'react';
import './home.css';
import MenuList from '../home/menu.json';

const menuBreakfast = MenuList.menu[0].options;

class BreakfastBttns extends React.Component{
  state={
    label:null,
    price: null,
    id: null, 
  };

  handleClickOptions = (e) => {
      e.preventDefault();
      this.setState({
          label: e.target.name,
          price: `/$${e.target.value}`,
          id: e.target.id
      });
    };
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addOrder(this.state)
  };

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
        <button onClick={this.handleSubmit}>Pedir</button>
    </section>
        )
  } 
};

const BreakfastOutput = ({orders}) => {
  return( 
    <table>
    <tbody>
    {orders.map(order=>
      <tr key={order.id}>
      <td>{order.label}</td>
      <td>{order.price}</td>
      </tr>
      )}
    </tbody>
  </table>
  )
};

export {BreakfastBttns, BreakfastOutput}