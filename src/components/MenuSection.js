import React from "react";
import { connect } from "react-redux";

class MenuSection extends React.Component {
  handleClickOptions = (e) => {
    let optionSelected = this.props.options.filter(
      (option) => option.id === e.target.id
    );
    if (this.props.orders.includes(optionSelected[0])) {
      alert(
        "Este producto ya fue agregado. Para aumentar o disminuir la cantidad del mismo, usa los botones de más y menos. Que tengas un buen día :)"
      );
    } else {
      this.props.addOrder(optionSelected[0]);
      this.props.count();
    }
  };

  render() {
    let menu = this.props.options.filter(
      (option) => option.type === this.props.selected
    );
    return (
      <article className={this.props.selected}>
        {menu.map((option) => (
          <button
            onClick={this.handleClickOptions}
            id={option.id}
            name={option.label}
            value={option.value}
            key={option.id}
            className={option.class}
          >
            {option.label}
          </button>
        ))}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    orders: state.orders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (order) => {
      dispatch({ type: "ADD_ORDER", order: order });
    },
    count: () => {
      dispatch({ type: "COUNT" });
    },
    updateQuant: (id, quant, price) => {
      dispatch({ type: "UPDATE_QUANTITY", id: id, quant: quant, price: price });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection);
