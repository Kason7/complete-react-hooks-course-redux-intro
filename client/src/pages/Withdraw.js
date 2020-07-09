import React from 'react';

// Redux dependencies
import { useSelector, useDispatch } from 'react-redux';

export const Withdraw = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onWithdrawHandle = () => {
    dispatch({ type: 'WITHDRAW', payload: 10 });
  };

  return (
    <div>
      <h1>Withdraw Page</h1>
      <p>Balance: {balance} </p>
      <button onClick={onWithdrawHandle}>Withdraw</button>
      <p>{loan ? 'Loan Applied' : 'Apply for Loan on Home Page'}</p>
    </div>
  );
};

export default Withdraw;
