// 1. import the configureStore
import { configureStore } from "@reduxjs/toolkit";
// 2. import the reducer
// import authReducer from '../reducers/authReducer';
import authSlicer from "../Slicer/authSlicer";
import postSlicer from "../Slicer/postSlicer";


// 3. create the store
export const store = configureStore({
  reducer: {
    auth: authSlicer,
    post: postSlicer,
  }
})