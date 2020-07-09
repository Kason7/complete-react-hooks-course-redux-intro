const initalState = {
  balance: 0,
};

const balanceReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload };
    case 'WITHDRAW':
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default balanceReducer;
