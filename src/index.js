import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// redux

// 1. import the configureStore
// import { configureStore } from "@reduxjs/toolkit";
// 2. import the reducer
// import authReducerRedux from "./reducers-redux/auth-redux";
// import authReducer from "./reducers/authReducer";
// 4. import the Provider
import { Provider } from "react-redux"; // will connects the store with app
import { store } from "./store";

// import AuthContextProvider from "./context/AuthContext";
// import PostContextProvider from "./context/PostContext";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

import { myTheme } from "./theme";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

// 3. create the store
// export const store = configureStore({
//   reducer: {
//     auth: authReducerRedux
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      {/* 5. add the Provider with store */}
      <Provider store={store}>
        {/* <AuthContextProvider>
          <PostContextProvider> */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          {/* </PostContextProvider>
        </AuthContextProvider> */}
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
