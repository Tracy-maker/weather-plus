import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./page/SignUp/SignUp";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Main from "./components/Main/Main";  
import UpdateProfile from "./components/UpdateProfile/UpdateProfile"; 
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

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
