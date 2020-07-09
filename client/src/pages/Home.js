import React from 'react';

// Redux dependencies
import { useSelector } from 'react-redux';

export const Home = () => {
  const balance = useSelector((state) => state.balance);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Home;
