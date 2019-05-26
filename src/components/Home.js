import React from 'react';
import '../components/home/home.css'
import Ticket from './Ticket';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuSection from './MenuSection';
import Form from './Form';
import Orders from './Orders';
import app from 'firebase/app';
import 'firebase/firebase-firestore';

let lunchArray;

class Home extends React.Component {
  state = {
    selected: null,
    orders:[]
  }

  handleLunchOption = (e) =>{
    e.preventDefault();
    this.setState({
      selected: e.target.id
    })
  }

  handleClick = (e) =>{
  console.log(this.props)
    e.preventDefault();
    this.setState({
      selected:null
    })
    if(e.target.id === "lunch"){
      lunchArray= this.props.lunchOptions.map(bttn => {
        return (
          <button onClick= {this.handleLunchOption} className  = {bttn.class} key={bttn.id}>
              <Link id={bttn.id} className = "link" to={'/home/lunch/' + bttn.id }>
                {bttn.label}
              </Link>
          </button>  
        )
      })
    }else{
      this.setState({
        selected: e.target.id
      }); 
    }
  }

    render(){
        const {bttns} = this.props
        const bttnsMenu = 
            bttns.map(bttn => {
              return (
                <button onClick={this.handleClick} className  = {bttn.class} key={bttn.id}>
                    <Link id={bttn.id} className = "link" to={'/home/' + bttn.id}>
                      {bttn.title}
                    </Link>
                </button>  
              )
            });
        
        const wrapperSection = () =>{
          if(this.props.location.pathname === "/home" || this.props.location.pathname === "/home/new-order"){
            return <Form/>
          } else if(this.props.location.pathname === "/home/orders-history"){
            let orders;
            app.firestore()
            .collection('orders')
            .get()
            .then(collection => {
            orders= collection.docs.map(doc => doc.data());})
            .then(()=>{this.setState({
              orders: orders
            })})
          return <Orders orders= {this.state.orders}/>
          } else {
            return <MenuSection selected = {this.state.selected}/>
          }

        }
        
        return (
            <>
        <header>
          {bttnsMenu}
          <article id="order-info">
            <p>{"Cliente: " + this.props.clientName}</p>
          </article>
          <button className="ready">Salir</button>
        </header>
        <section>
          <article id="lunch-menu">
          {lunchArray}
          </article>   
          <main>
            <section id="wrapper">
            {wrapperSection()}
            </section>
            <Ticket/>
          </main>
        </section>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      bttns: state.bttns,
      lunchOptions: state.lunchOptions,
      clientName: state.clientName
    }
  }

export default connect(mapStateToProps)(Home)