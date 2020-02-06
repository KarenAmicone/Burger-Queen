import React from "react";
import "./home/home.css";
import { connect } from "react-redux";

class Form extends React.Component {
  state = {
    name: null
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    this.props.addName(this.state.name);
  };

  render() {
    return (
      <form id="form-name" onSubmit={this.handleSubmit}>
        <label htmlFor="input-name">Nombre del cliente</label>
        <br></br>
        <input
          type="text"
          onChange={this.handleChange}
          className="input-name"
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientName: state.clientName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addName: name => {
      dispatch({ type: "ADD_NAME", name: name });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
