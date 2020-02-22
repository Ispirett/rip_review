import React,{useReducer, createContext} from "react";
import Utils from "../helpers/Utils";
const initState = {
    items: [],
    topRated:[],
    authentication:{
        token: Utils.tokenStore.get() || '',
        login: Utils.tokenStore.get() ? true: false,
    }
};
const actions = {
    ITEMS: 'ITEMS',
    AUTH: 'AUTH',
    LOGOUT: 'LOGOUT',
    UPDATE_ITEMS: 'UPDATE_ITEMS',
    TOP_RATED: 'TOP_RATED'
};
const AppContext = createContext(initState);
const reducer = (state, action) =>{
    switch (action.type) {
        case actions.ITEMS:
            return {
                ...state,
                items: action.items
            };
        case actions.UPDATE_ITEMS:
            return {
                ...state,
                items: state.items.concat(action.item)
            };
        case actions.TOP_RATED:
            return {
                ...state,
                topRated:action.topRated
            }
        case actions.AUTH:
           Utils.tokenStore.store(action.token);
            return {
                ...state,
                authentication: {
                   token: action.token,
                    login: action.token !== undefined ? true: false
                }
            };
        case actions.LOGOUT:
            Utils.tokenStore.store('');
            return {
                ...state,
                authentication: {
                    login: false
                }
            };
        default:
            return state
    }
};

export default ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initState);
    return(
        <AppContext.Provider value={[state,dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

export {actions,AppContext}