const initalState = {
  balance: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload };
    case 'WITHDRAW':
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default reducer;
