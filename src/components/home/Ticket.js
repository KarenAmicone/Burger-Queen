import React from 'react';
import './home.css';
import { connect } from 'react-redux';


class Ticket extends React.Component{
  handleDelete = (id, price) =>{
    this.props.deleteOrder(id, price)
  };

  render (){
    return( 
      <article id="payments">
      <table>
      <tbody>
      {this.props.orders.map(order=>
        <tr key={order.id}>
        <td>{order.name}</td>
        <td>{"$" + order.price}</td>
        <td>{order.ingredients}</td>
        <td> <button onClick = {()=> {this.handleDelete(order.id, order.price)}}><i className="material-icons">delete_outline</i></button> </td>
        </tr>
        )}

        <tr key= "total">
          <td>Total:</td>
          <td>{"$" + this.props.total}</td>
        </tr>
      </tbody>
    </table>
    <p></p>
    </article>
    )
  }
    
  };
  
  const mapState = (state) => {
      return{
          orders: state.orders,
          total: state.total
      }
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      deleteOrder: (id, price) => {dispatch({type: 'DELETE_ORDER', id: id, price: price})}
    }
  }

  export default connect(mapState, mapDispatchToProps)(Ticket)