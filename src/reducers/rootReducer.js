import menu from '../components/home/menu.json'

const initState = {
    bttns: menu.bttns,
    options: menu.options,
    lunchOptions: menu.lunchOptions,
    orders: []
};

const rootReducer = (state = initState, action) => {
    if(action.type === 'ADD_ORDER'){
        let newOrder = [...state.orders, action.order];
        return {
            ...state,
            orders: newOrder
        }
    } else if(action.type === 'DELETE_ORDER'){
        let newOrder = state.orders.filter(order=>{
            return action.id !== order.id
          });
          return {
              ...state,
            orders: newOrder
        }
    }
    return state;
};

export default rootReducer