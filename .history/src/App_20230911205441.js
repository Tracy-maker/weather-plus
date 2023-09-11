import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/Main";
import UpdateProfile from "./components/UpdateProfile";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <AuthProvider>
            <Routes>
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Main />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
};

export default App;
