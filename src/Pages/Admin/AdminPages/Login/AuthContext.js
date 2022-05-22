import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      "isAuthenticated",
      JSON.stringify(state.isAuthenticated)
    );
  }, [state.isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: state.isAuthenticated, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
