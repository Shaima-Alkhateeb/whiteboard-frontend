import { createContext, useContext, useReducer } from "react";
import base64 from "base-64";
import { signUp, Signin, logout } from "../actions/authActions";
import { dataState } from "../config/initials";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (props) => {
  const [userData, dispatch] = useReducer(authReducer, dataState);

  const handleSignup = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.confirmPassword.value) {
      const data = {
        userName: e.target.userName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      };

      signUp(dispatch, data);
      console.log(userData);
    } else {
      signUp(dispatch, { error: "password dont match" });
      console.log("error");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const user = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    const encoded = base64.encode(`${user.userName}:${user.password}`);
    Signin(dispatch, encoded);
    console.log(userData);
  };

  const handleLogout = () => {
    logout(dispatch);
  };

  const value = { userData, handleLogout, handleSignin, handleSignup };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
