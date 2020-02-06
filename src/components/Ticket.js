import React from "react";
import { connect } from "react-redux";
import app from "firebase/app";
import "firebase/firebase-firestore";

class Ticket extends React.Component {
  handleDelete = (id, price) => {
    this.props.deleteOrder(id, price);
  };

  handleOrder = e => {
    e.preventDefault();
    app
      .firestore()
      .collection("orders")
      .add({
        orders: this.props.orders,
        total: this.props.total,
        clientName: this.props.clientName
      })
      .then(this.props.reset());
  };

  render() {
    return (
      <section id="payments">
        <article id="table">
          <table>
            <tbody>
              {this.props.orders.map(order => (
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td>{"$" + order.price}</td>
                  <td>{order.ingredients}</td>
                  <td>{order.quant}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        this.handleDelete(order.id, order.price);
                      }}
                    >
                      <i className="material-icons">delete_outline</i>
                    </button>{" "}
                  </td>
                </tr>
              ))}

              <tr key="total">
                <td>Total:</td>
                <td>{"$" + this.props.total}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </article>
        <article className="ordering">
          <button className="purple-bttns" onClick={this.handleOrder}>
            TERMINAR PEDIDO
          </button>
        </article>
      </section>
    );
  }
}

const mapState = state => {
  return {
    orders: state.orders,
    total: state.total,
    clientName: state.clientName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: (id, price) => {
      dispatch({ type: "DELETE_ORDER", id: id, price: price });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
    addItems: () => {}
  };
};

export default connect(mapState, mapDispatchToProps)(Ticket);
