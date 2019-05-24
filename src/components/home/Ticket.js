import React from 'react';
import './home.css';
import { connect } from 'react-redux';


class Ticket extends React.Component{
  handleDelete = (id) =>{
    this.props.deleteOrder(id)
  };

  render (){
    return( 
      <article id="payments">
      <table>
      {<tbody>
      {this.props.orders.map(order=>
        <tr key={order.id}>
        <td>{order.name}</td>
        <td>{order.price}</td>
        <td>{order.ingredients}</td>
        <td> <button onClick = {()=> {this.handleDelete(order.id)}}><i className="material-icons">delete_outline</i></button> </td>
        </tr>
        )}
      </tbody>}
    </table>
    </article>
    )
  }
    
  };
  
  const mapState = (state) => {
      return{
          orders: state.orders
      }
  }

  const mapDispatchToProps = (dispatch) =>{
    return {
      deleteOrder: (id) => {dispatch({type: 'DELETE_ORDER', id: id})}
    }
  }

  export default connect(mapState, mapDispatchToProps)(Ticket)