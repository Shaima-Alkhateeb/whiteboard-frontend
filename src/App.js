import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Post from "./components/Post";
import Footer from "./components/Footer";

// import { useAuth } from "./context/AuthContext";

import { useSelector } from 'react-redux'

function App() {
  // const { userData } = useAuth();
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={isAuth ? <Post /> : <Signin />}
          ></Route>
          <Route
            exact
            path="/signin"
            element={isAuth ? <Post /> : <Signin />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={isAuth ? <Post /> : <Signup />}
          ></Route>
          <Route
            exact
            path="/post"
            element={isAuth ? <Post /> : <Signin />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
