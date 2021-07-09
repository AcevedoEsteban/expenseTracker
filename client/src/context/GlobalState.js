import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

// provider componet
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  // eslint-disable-next-line no-unused-vars
  async function getTransactions() {
    try {
      const res = await axios.get("api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      header: {
        "Content-Type": "appliction/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
