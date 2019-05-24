import menu from '../components/home/menu.json'

const initState = {
    bttns: menu.bttns,
    options: menu.options,
    lunchOptions: menu.lunchOptions
};

const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer