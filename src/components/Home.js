import React from "react";

import app from "firebase/app";
import "firebase/firebase-firestore";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../components/home/home.css";

import Ticket from "./Ticket";
import MenuSection from "./MenuSection";
import Form from "./Form";
import Orders from "./Orders";
import LogoutButton from "./logout_button";

let lunchArray;

class Home extends React.Component {
  state = {
    selected: null,
    orders: [],
  };

  handleLunchOption = (e) => {
    e.preventDefault();
    this.setState({
      selected: e.target.id,
    });
  };

  firestoreSnapshot = () => {
    app
      .firestore()
      .collection("orders")
      .orderBy("createdAt", "desc")
      .get()
      .then((collection) => {
        let orders = collection.docs;
        this.setState({
          orders: orders,
        });
      });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      selected: null,
    });
    if (e.target.id === "lunch") {
      lunchArray = this.props.lunchOptions.map((bttn) => {
        return (
          <button
            onClick={this.handleLunchOption}
            className={bttn.class}
            key={bttn.id}
          >
            <Link id={bttn.id} className="link" to={"/home/lunch/" + bttn.id}>
              {bttn.label}
            </Link>
          </button>
        );
      });
    } else if (e.target.id === "orders-history") {
      this.firestoreSnapshot();
      this.setState({
        selected: e.target.id,
      });
    } else {
      this.setState({
        selected: e.target.id,
      });
    }
  };

  render() {
    const { bttns } = this.props;
    const bttnsMenu = bttns.map((bttn) => {
      return (
        <button onClick={this.handleClick} className={bttn.class} key={bttn.id}>
          <Link id={bttn.id} className="link" to={"/home/" + bttn.id}>
            {bttn.title}
          </Link>
        </button>
      );
    });

    const wrapperSection = () => {
      if (
        this.props.location.pathname === "/home" ||
        this.props.location.pathname === "/home/new-order"
      ) {
        return <Form />;
      } else if (this.props.location.pathname === "/home/orders-history") {
        return <Orders orders={this.state.orders} />;
      } else {
        return <MenuSection selected={this.state.selected} />;
      }
    };

    return (
      <>
        <header>
          {bttnsMenu}
          <div id="order-info">
            <p>{"Cliente: " + this.props.clientName}</p>
          </div>
          <LogoutButton />
        </header>
        <section className="main-container">
          <article id="lunch-menu">{lunchArray}</article>
          <main>
            <section id="wrapper">{wrapperSection()}</section>
            <Ticket />
          </main>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bttns: state.bttns,
    lunchOptions: state.lunchOptions,
    clientName: state.clientName,
  };
};

export default connect(mapStateToProps)(Home);
