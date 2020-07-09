import React from 'react';

// Redux dependencies
import { useSelector, useDispatch } from 'react-redux';

export const Deposit = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onDepositHandle = () => {
    dispatch({ type: 'DEPOSIT', payload: 10 });
  };

  return (
    <div>
      <h1>Deposit Page</h1>
      <p>Balance: {balance} </p>
      <button onClick={onDepositHandle}>Deposit</button>
      <p>{loan ? 'Loan Applied' : 'Apply for Loan on Home Page'}</p>
    </div>
  );
};

export default Deposit;
