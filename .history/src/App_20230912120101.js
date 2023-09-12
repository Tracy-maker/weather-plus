import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp/SignUp";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./page/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Main from "./page/Main/Main";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full">
          <AuthProvider>
            <Routes>
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
