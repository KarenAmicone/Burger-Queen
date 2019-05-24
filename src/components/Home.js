import React from 'react';
import '../components/home/home.css';
import Ticket from './home/Ticket';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuSection from './MenuSection';

let lunchArray;

class Home extends React.Component {
  state = {
    selected: null
  }

  handleLunchOption = (e) =>{
    e.preventDefault();
    this.setState({
      selected: e.target.id
    })
  }

  handleClick = (e) =>{
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
        
        return (
            <>
        <header>
          {bttnsMenu}
          <article id="order-info">
            <p>Cliente: </p>
            <p>No. Orden: </p>
          </article>
          <button className="ready">Salir</button>
        </header>
        <section>
          <article id="lunch-menu">
          {lunchArray}
          </article>   
          <main>
            <section id="wrapper">
            <MenuSection selected = {this.state.selected}/>
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
      lunchOptions: state.lunchOptions
    }
  }

export default connect(mapStateToProps)(Home)