import React from 'react'
import { connect } from 'react-redux'


class MenuSection extends React.Component {
  handleClickOptions = (e) => {
    this.props.addOrder(
      {
        name: e.target.name,
        price: e.target.value,
        id: e.target.id
      }
      );
    console.log(this.props.orders)
  }; 

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
          className={option.class}
          >{option.label}</button>
        ))}
     </article>
      )
    
   
    } 
}


const mapStateToProps = (state) => {
  return {
    options: state.options
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addOrder: (order) => {dispatch({type: 'ADD_ORDER', order: order})}
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection)