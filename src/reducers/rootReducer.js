import menu from "../components/menu.json";

const initState = {
  bttns: menu.bttns,
  options: menu.options,
  lunchOptions: menu.lunchOptions,
  orders: [],
  total: 0,
  path: null,
  clientName: "",
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_ORDER") {
    let newOrder = [...state.orders, action.order];
    return {
      ...state,
      orders: newOrder,
    };
  } else if (action.type === "DELETE_ORDER") {
    let newOrder = state.orders.filter((order) => {
      return action.id !== order.id;
    });

    return {
      ...state,
      orders: newOrder,
    };
  } else if (action.type === "COUNT") {
    let individualAccount = state.orders.map((order) => {
      console.log(order.total);
      return parseInt(order.total);
    });

    let totalAccount =
      individualAccount.length === 0
        ? 0
        : individualAccount.reduce((total, num) => {
            return total + num;
          });

    return {
      ...state,
      total: totalAccount,
    };
  } else if (action.type === "ADD_NAME") {
    let name = action.name;
    return {
      ...state,
      clientName: name,
    };
  } else if (action.type === "UPDATE_QUANTITY") {
    let newTotal = action.quant * action.price;
    return {
      ...state,
      orders: state.orders.map((order) =>
        order.id === action.id
          ? { ...order, quantity: action.quant, total: newTotal }
          : order
      ),
    };
  } else if (action.type === "RESET") {
    return {
      bttns: menu.bttns,
      options: menu.options,
      lunchOptions: menu.lunchOptions,
      orders: [],
      total: 0,
      path: null,
      clientName: "",
    };
  }
  return state;
};

export default rootReducer;
