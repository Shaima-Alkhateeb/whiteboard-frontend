import { createSlice } from "@reduxjs/toolkit";
// import { dataState } from "../config/initials";

const userInfo = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : {};
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";

const initialState = {
  user: {
    username: userInfo ? userInfo.username : "",
    role: userInfo ? userInfo.role : "",
    email: userInfo ? userInfo.email : "",
    token: token ? token : "",
    userId: userInfo ? userInfo.id : "",
  },
  loading: false,
  isAuth: token ? true : false,
//   isNotLogged: false,
//   isPassword: false,
  error: "",
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // FOR SIGNUP
        requestSignup: (state) => {
            state.loading = true;
        },
        signupSuccess: (state) => {
            state.loading = false;
        },
        signupFailure: (state, action) => {
            state.loading = false;
            // state.isPassword = true;
            state.error = action.payload;
        },

        // FOR SIGNIN
        requestSignin: (state) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.isAuth = true;
            state.user = {
                username: action.payload.user.username,
                role: action.payload.user.role,
                email: action.payload.user.email,
                token: action.payload.token,
                userId: action.payload.user.id,
            };
            state.token = action.payload.token;
        },
        signinFailure: (state, action) => {
            state.user = {};
            state.loading = false;
            state.isNotLogged = true;
            state.error = action.payload;
        },

        // FOR LOGOUT
        requestLogout: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.isAuth = false;
            state.user = {};
            state.loading = false;
        },
        logoutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    requestSignup,
    signupSuccess,
    signupFailure,
    requestSignin,
    signinSuccess,
    signinFailure,
    requestLogout,
    logoutSuccess,
    logoutFailure,
} = authSlice.actions;

export const authActions = authSlice.actions;
export default authSlice.reducer;




