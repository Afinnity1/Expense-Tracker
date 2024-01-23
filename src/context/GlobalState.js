import React, { createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: []
}

// Create context (bcs we're going to be bringing this into other files when we want to use it)
export const GlobalContext = createContext(initialState);

// Provider component (Now in other for other components to have access to our store/globalstate, we need to createour provider, basically wrapping all our components in our app.js in our provider)
export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

     return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
     </GlobalContext.Provider>);
}
