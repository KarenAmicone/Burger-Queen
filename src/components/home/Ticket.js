import React from 'react';
import './home.css';
import { connect } from 'react-redux';

class Ticket extends React.Component{
  render (){
    console.log(this.props)
    return( 
      <article id="payments">
      <table>
      {/* <tbody>
      {orders.map(order=>
        <tr key={order.id}>
        <td>{order.label}</td>
        <td>{order.price}</td>
        <td>{order.ingredients}</td>
        <td> <button onClick={()=> {deleteOrder(order.id)}}><i className="material-icons">delete_outline</i></button> </td>
        </tr>
        )}
      </tbody> */}
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

  export default connect(mapState)(Ticket)