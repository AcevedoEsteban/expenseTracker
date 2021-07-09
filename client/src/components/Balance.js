import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utls/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  // eslint-disable-next-line no-param-reassign
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4> Your Balnce</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  );
};
