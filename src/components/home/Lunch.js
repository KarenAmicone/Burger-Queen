import React from 'react';
import './home.css';
import { MenuOptions, Ingredients } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuList from './menu.json';

function Lunch(){
    return (
        <Router>
            <article id="lunch-menu">
            <button id= "hamburguer" className= "lunch-options">
                <Link className= "link" to="/home/comida/hamburguesas">HAMBURGUESA</Link>
            </button>
            <button id= "extras" className= "lunch-options">   
                <Link className= "link" to="/home/comida/guarnicion">GUARNICION</Link>
            </button>
            <button id= "drinks" className= "lunch-options">
                <Link className= "link" to="/home/comida/bebidas">BEBIDAS</Link>
            </button>
            <button id= "promos" className= "lunch-options">
                <Link className= "link" to="/home/comida/promos">PROMOCIONES</Link>
            </button>
                </article>

            <Route exact path="/home/comida"/>
            <Route path="/home/comida/hamburguesas" component={Hamburger}/>
            <Route path="/home/comida/guarnicion" component={Extras}/>
            <Route path="/home/comida/bebidas" component={Drinks}/>
            <Route path="/home/comida/promos"/>

        </Router>
          )
        }

        const menuLunch = MenuList.menu[1]

const Hamburger = () =>{
    return(
    <main>
        <section id="wrapper">
            <article id="lunch-grid">
            {menuLunch.options.map(menu => (
              <MenuOptions
                label={menu.label}
                id={menu.id}
                value={menu.value}
              />
            ))} 
            {menuLunch.ingredients.map(ingredients=> (
              <Ingredients
                label={ingredients.label}
                id={ingredients.id}
                value={ingredients.value}
              />
            ))}
            </article>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

const Extras = () =>{
    return(
    <main>
        <section id="wrapper">
            <article id="extras-grid">
            {menuLunch.extras.map(extra=> (
              <MenuOptions
                label={extra.label}
                id={extra.id}
                value={extra.value}
              />
            ))}
            </article>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

const Drinks = () =>{
    return(
    <main>
        <section id="wrapper">
            <article id="drinks-grid">
            <h3 id="soda-title">REFRESCO</h3>
            <h3 id="water-title">AGUA</h3>
            {menuLunch.drinks.map(drink=> (
              <MenuOptions
                label={drink.label}
                id={drink.id}
                value={drink.value}
              />
            ))}
            
            </article>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

export default Lunch