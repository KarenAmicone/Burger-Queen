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

    let sum = state.total - action.price * action.quant;
    return {
      ...state,
      orders: newOrder,
      total: sum,
    };
  } else if (action.type === "COUNT") {
    let individualAccount = state.orders.map((order) => {
      return parseInt(order.value * order.quantity);
    });
    let totalAccount = individualAccount.reduce((total, num) => {
      console.log(total + num);
      return total + num;
    });

    return {
      ...state,
      total: totalAccount,
    };
  } else if (action.type === "EDIT_INGREDIENT") {
    let newOrder = [...state.orders];
    return {
      ...state,
      orders: newOrder,
    };
  } else if (action.type === "ADD_NAME") {
    let name = action.name;
    return {
      ...state,
      clientName: name,
    };
  } else if (action.type === "UPDATE_QUANTITY") {
    return {
      ...state,
      orders: state.orders.map((order) =>
        order.id === action.id ? { ...order, quantity: action.quant } : order
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
