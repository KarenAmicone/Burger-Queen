import React from 'react'
import { connect } from 'react-redux'


class MenuSection extends React.Component {
  render() {
    let menu= this.props.options.filter(option => option.type === this.props.selected)
  return(
    <article className={this.props.selected}>
    {menu.map(option => (
          <button
          //onClick = {this.handleClickOptions}
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

export default connect(mapStateToProps)(MenuSection)