const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG_USER_IN":
      return { ...state, user: action.payload, loggedIn: true, loading: false };
    case "LOG_USER_OUT":
      return { user: {}, loggedIn: false, loading: false };
    default:
      return state;
  }
};

export default authReducer;
