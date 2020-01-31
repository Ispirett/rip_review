import React,{useReducer, createContext} from "react";
import Utils from "../components/Utils";
const initState = {
    items: [],
    authentication:{
        token: Utils.tokenStore.get() || '',
        login: Utils.tokenStore.get() === ''? false : true,
    }
};
const actions = {
    ITEMS: 'ITEMS',
    AUTH: 'AUTH',
    LOGOUT: 'LOGOUT'
};
const AppContext = createContext(initState);
const reducer = (state, action) =>{
    switch (action.type) {
        case actions.ITEMS:
            return {
                ...state,
                items: action.items
            };
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