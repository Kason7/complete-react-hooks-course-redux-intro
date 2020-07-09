import React from 'react';

// Redux dependencies
import { useSelector, useDispatch } from 'react-redux';

export const Withdraw = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const onWithdrawHandle = () => {
    dispatch({ type: 'WITHDRAW', payload: 10 });
  };

  return (
    <div>
      <h1>Withdraw Page</h1>
      <p>Balance: {balance} </p>
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
