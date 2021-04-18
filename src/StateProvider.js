import React, { createContext, useContext, useReducer} from "react";


export const StateContext = createContext();

/*
Wrap App and provide the data layer
*/
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

)

// pull information from data layer
export const useStateValue = () => useContext(StateContext);