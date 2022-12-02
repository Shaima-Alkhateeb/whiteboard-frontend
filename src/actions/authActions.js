import axios from "axios";
import base64 from "base-64";
// import { actionType } from "../config/constant";

// import { useDispatch, useSelector } from "react-redux";

import {
  requestSignup,
  signupSuccess,
  signupFailure,
  requestSignin,
  signinSuccess,
  signinFailure,
  // requestLogout,
  logoutSuccess,
  logoutFailure,
} from "../Slicer/authSlicer";

export const signUp = (dispatch, payload) => {
  payload.preventDefault();
  // dispatch(requestSignup());
  // const { username, email, password } = payload.target.elements;
  if (payload.target.password.value === payload.target.confirmPassword.value) {
    const data = {
      userName: payload.target.userName.value,
      email: payload.target.email.value,
      password: payload.target.password.value,
      role: payload.target.role.value,
    };

    try {
      if (payload.error) {
        // dispatch({
        //   type: actionType.SIGNUP_FAILURE,
        //   payload: payload.error,
        // });
        dispatch(signupFailure(payload.error));
      } else {
        // dispatch({ type: actionType.REQUEST_SIGNUP });
        dispatch(requestSignup());
        axios
          .post(`${process.env.REACT_APP_HEROKU_URL}/signup`, data)
          .then((res) => {
            // dispatch({ type: actionType.SIGNUP_SUCCESS, payload: res.data });
            dispatch(signupSuccess(res.data));
            window.location.href = "/signin";
          })
          .catch((error) =>
            // dispatch({ type: actionType.SIGNUP_FAILURE, payload: error })
            dispatch(signupFailure(error.response.data))
          );
      }
    } catch (error) {
      // dispatch({ type: actionType.SIGNUP_FAILURE, payload: error });
      dispatch(signupFailure(error.response.data));
    }
  } else {
    // dispatch({ type: actionType.SIGNUP_FAILURE, payload: "Password not match" });
    dispatch(signupFailure("Password not match"));
  }
};

export const login = (dispatch, payload) => {
  payload.preventDefault();
  const user = {
    userName: payload.target.userName.value,
    password: payload.target.password.value,
  };
  const encoded = base64.encode(`${user.userName}:${user.password}`);
  try {
    if (payload.error) {
      // dispatch({ type: actionType.SIGNIN_FAILURE, payload: payload.error });
      dispatch(signinFailure(payload.error));
    } else {
      // dispatch({ type: actionType.REQUEST_SIGNIN });
      dispatch(requestSignin());
      axios
        .post(
          `${process.env.REACT_APP_HEROKU_URL}/signin`,
          {},
          {
            headers: {
              Authorization: `Basic ${encoded}`,
            },
          }
        )
        .then((res) => {
          // dispatch({ type: actionType.SIGNIN_SUCCESS, payload: res.data });
          dispatch(signinSuccess(res.data));
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("currentUser", JSON.stringify(res.data.user));
          // window.location.href = "/post";
          localStorage.setItem('role', res.data.user.role);
          // localStorage.setItem('userName', res.data.user.userName);
          localStorage.setItem('email', res.data.user.email);
          localStorage.setItem('userId', res.data.user.id)
        })
        .catch((error) =>
          // dispatch({ type: actionType.SIGNIN_FAILURE, payload: error })
          dispatch(signinFailure(error.response.data))
        );
    }
  } catch (error) {
    // dispatch({ type: actionType.SIGNIN_FAILURE, payload: error });
    dispatch(signinFailure(error.response.data));
  }
};

export const logout = (dispatch) => {
  try {
    // dispatch({ type: actionType.LOGOUT_SUCCESS });
    dispatch(logoutSuccess());
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    // localStorage.removeItem('email');
    localStorage.removeItem('userId')
  } catch (error) {
    // dispatch({ type: actionType.LOGOUT_FAILURE, payload: error });
    dispatch(logoutFailure(error));
  }
};
