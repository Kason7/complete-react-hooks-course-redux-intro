import React from 'react';

// Redux dependencies
import { useSelector, useDispatch } from 'react-redux';

export const Deposit = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const onDepositHandle = () => {
    dispatch({ type: 'DEPOSIT', payload: 10 });
  };

  return (
    <div>
      <h1>Deposit Page</h1>
      <p>Balance: {balance} </p>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
};

export default Deposit;
