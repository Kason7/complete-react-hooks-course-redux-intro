import React from 'react';

// Redux dependencies
import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);

  const dispatch = useDispatch();

  const applyLoanHandle = () => {
    dispatch({ type: 'APPLY' });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Balance: {balance}</p>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
      <button
        className='button-style'
        disabled={loan ? true : false}
        onClick={applyLoanHandle}
      >
        {loan ? 'Loan Applied' : 'Apply for Loan'}
      </button>
    </div>
  );
};

export default Home;
