import React from 'react'
import { connect } from 'react-redux'


class MenuSection extends React.Component {
  handleClickOptions = (e) => {
    if(e.target.className === "ingredients"){
        let sandwich = this.props.orders.find(order =>{ 
          return order.id === "sandwich"
        });
        sandwich.ingredients.push(` SIN ${e.target.name}, `)
        this.props.editIngredients(sandwich);      
    } else{
      this.props.addOrder(
        {
          name: e.target.name,
          price: e.target.value,
          id: e.target.id,
          class : e.target.className,
          ingredients: []
        }
      );
      this.props.count();
    };
    }
     

  render() {
    let menu= this.props.options.filter(option => option.type === this.props.selected)
  return(
    <article className={this.props.selected}>
    {menu.map(option => (
          <button
          onClick = {this.handleClickOptions}
          id={option.id}
          name={option.label}
          value={option.value}
          key={option.id}
          className= {option.class}
          >{option.label}</button>
        ))}
     </article>
      )
    
   
    } 
}


const mapStateToProps = (state) => {
  return {
    options: state.options,
    orders: state.orders
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addOrder: (order) => {dispatch({type: 'ADD_ORDER', order: order})},
    count: () =>{dispatch({type: 'COUNT'})},
    editIngredients : (sandwich) => {dispatch ({type: 'EDIT_INGREDIENT', sandwich: sandwich})}
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection)