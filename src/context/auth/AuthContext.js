import { createContext, useReducer } from "react";
import authReducer from "./AuthReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    loggedIn: false,
    loading: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    ...state,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
