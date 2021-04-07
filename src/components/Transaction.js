/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button type="button" className="delete-btn">
        x
      </button>
    </li>
  );
};
