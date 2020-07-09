import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import * as balanceActions from '../actions/balanceActions';

export const Deposit = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const dispatch = useDispatch();

  const onDepositHandle = () => {
    dispatch(balanceActions.depositAsync);
  };

  return (
    <div>
      <h1>Deposit Page</h1>
      {loading ? <p>Saving ...</p> : <p>Balance: {balance} </p>}
      <button onClick={onDepositHandle}>Deposit</button>
      <p>{loan ? 'Loan Applied' : 'Apply for Loan on Home Page'}</p>
    </div>
  );
};

export default Deposit;
