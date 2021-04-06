import React from 'react';

// eslint-disable-next-line react/prop-types
export const Transaction = ({ transaction }) => (
  <li className="minus">
    {transaction.text} <span>-$400</span>
    <button type="button" className="delete-btn">
      x
    </button>
  </li>
);
