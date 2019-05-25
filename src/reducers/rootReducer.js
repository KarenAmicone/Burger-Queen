import menu from '../components/home/menu.json'

const initState = {
    bttns: menu.bttns,
    options: menu.options,
    lunchOptions: menu.lunchOptions,
    orders: [],
    total: 0,
    path: null
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

        let sum = state.total - action.price
          return {
              ...state,
            orders: newOrder,
            total: sum
          }
    } else if (action.type === 'COUNT'){
        let prices = state.orders.map(order => {
            return parseInt(order.price) 
        })
        let sum = prices.reduce((total, num)=> {
            return total + num
        });
        
        return {
            ...state,
            total: sum
        }
    } else if(action.type === 'EDIT_INGREDIENT'){
        let newOrder = [...state.orders];
        return {
            ...state,
          orders: newOrder
        }
    }
    return state;
};

export default rootReducer