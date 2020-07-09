const initalState = {
  balance: 0,
  loading: false,
};

const balanceReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload, loading: false };
    case 'WITHDRAW':
      return { balance: state.balance - action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default balanceReducer;
