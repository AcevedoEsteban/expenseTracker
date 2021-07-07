/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// eslint-disable-next-line react/prop-types
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        type="button"
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
