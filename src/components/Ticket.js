import React from "react";
import { connect } from "react-redux";
import app from "firebase/app";
import "firebase/firebase-firestore";

class Ticket extends React.Component {
  handleDelete = (id, price) => {
    this.props.deleteOrder(id, price);
  };

  handleAddItem = (id, quant) => {
    let newQuant = quant + 1;
    this.props.updateQuant(id, newQuant);
  };

  handleSubstractItem = (id, quant) => {
    let newQuant = quant - 1;
    this.props.updateQuant(id, newQuant);
  };

  handleOrder = (e) => {
    e.preventDefault();
    app
      .firestore()
      .collection("orders")
      .add({
        orders: this.props.orders,
        total: this.props.total,
        clientName: this.props.clientName,
        createdAt: app.firestore.Timestamp.fromDate(new Date()),
      })
      .then(this.props.reset());
  };

  render() {
    return (
      <section id="payments">
        <article id="table">
          {this.props.orders.map((order) => (
            <div key={order.id} className="order-item-container">
              <p className="order-item-name ticket-element">{order.name}</p>
              <p className="order-item-price ticket-element">
                {`$ ${order.price}`}
              </p>
              <p className="order-item-quantity ticket-element">
                {order.quant}
              </p>
              <div className="counter-buttons-container">
                <button
                  onClick={() => {
                    this.handleSubstractItem(order.id, order.quant);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    this.handleAddItem(order.id, order.quant);
                  }}
                >
                  +
                </button>
              </div>
              <div className="order-item-delete-bttn ticket-element">
                <button
                  onClick={() => {
                    this.handleDelete(order.id, order.price);
                  }}
                >
                  <i className="material-icons">delete_outline</i>
                </button>
              </div>
              <p className="order-item-specifications ticket-element">{`DETALLES: ${order.ingredients}`}</p>
            </div>
          ))}
          <div key="total" className="total">
            <p>Total:</p>
            <p>{`$ ${this.props.total}`}</p>
          </div>
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

const mapState = (state) => {
  return {
    orders: state.orders,
    total: state.total,
    clientName: state.clientName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: (id, price) => {
      dispatch({ type: "DELETE_ORDER", id: id, price: price });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
    addItems: () => {},
    updateQuant: (id, quant) => {
      dispatch({ type: "UPDATE_QUANTITY", id: id, quant: quant });
    },
  };
};

export default connect(mapState, mapDispatchToProps)(Ticket);
