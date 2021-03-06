import React from "react";
import { connect } from "react-redux";
import app from "firebase/app";
import "firebase/firebase-firestore";

class Ticket extends React.Component {
  handleDelete = (id) => {
    this.props.deleteOrder(id);
    this.props.count();
  };

  handleAddItem = (id, quant, price) => {
    let newQuant = quant + 1;
    this.props.updateQuant(id, newQuant, price);
    this.props.count();
  };

  handleSubstractItem = (id, quant, price) => {
    let newQuant = quant - 1;
    this.props.updateQuant(id, newQuant, price);
    this.props.count();
    if (newQuant >= 1) {
      this.props.updateQuant(id, newQuant, price);
      this.props.count();
    } else {
      this.props.deleteOrder(id);
    }
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

  cancelOrder = (e) => {
    e.preventDefault();
    this.props.reset();
  };

  render() {
    return (
      <section id="payments">
        <article id="table">
          {this.props.orders.map((order) => (
            <div key={order.id} className="order-item-container">
              <p className="order-item-name ticket-element">{order.label}</p>
              <p className="order-item-price ticket-element">
                {`$ ${order.value}`}
              </p>
              <p className="order-item-quantity ticket-element">
                {order.quantity}
              </p>
              <div className="counter-buttons-container">
                <button
                  onClick={() => {
                    this.handleSubstractItem(
                      order.id,
                      order.quantity,
                      order.value
                    );
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    this.handleAddItem(order.id, order.quantity, order.value);
                  }}
                >
                  +
                </button>
              </div>
              <div className="order-item-delete-bttn ticket-element">
                <button
                  onClick={() => {
                    this.handleDelete(order.id);
                  }}
                >
                  <i className="material-icons">delete_outline</i>
                </button>
              </div>
            </div>
          ))}
          <div key="total" className="total">
            {this.props.total === 0 ? (
              <p></p>
            ) : (
              <p>{`Total: $ ${this.props.total}`}</p>
            )}
          </div>
        </article>
        <article className="ordering">
          <button className="purple-bttns" onClick={this.handleOrder}>
            ORDENAR
          </button>
          <button className="purple-bttns" onClick={this.cancelOrder}>
            CANCELAR
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
    deleteOrder: (id) => {
      dispatch({ type: "DELETE_ORDER", id: id });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
    updateQuant: (id, quant, price) => {
      dispatch({ type: "UPDATE_QUANTITY", id: id, quant: quant, price: price });
    },
    count: () => {
      dispatch({ type: "COUNT" });
    },
  };
};

export default connect(mapState, mapDispatchToProps)(Ticket);
