import React,{useReducer, createContext} from "react";

const initState = {
    items: [],
    reviews:[],
};
const actions = {
    ITEMS: 'ITEMS'
};
const AppContext = createContext(initState);
const reducer = (state, action) =>{
    switch (action.type) {
        case actions.ITEMS:
            return {
                ...state,
                items: action.items
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