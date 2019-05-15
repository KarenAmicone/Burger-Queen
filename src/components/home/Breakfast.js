import React from 'react'
import './home.css'
import {MenuOptions, Ingredients} from './components'
import MenuList from './menu.json';


const menuBreakfast = MenuList.menu[0];

class Breakfast extends React.Component {
    render(){
    return (
        <section>
        <article id="lunch-menu"></article>   
        <main>
            <section id="wrapper">
            <article id="breakfast-grid">
            {menuBreakfast.options.map(menu => (
              <MenuOptions
                label={menu.label}
                id={menu.id}
                value={menu.value}
              />
            ))} 
            {menuBreakfast.ingredients.map(ingredients=> (
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
          </section>
          )
        };
        }

    
export default Breakfast