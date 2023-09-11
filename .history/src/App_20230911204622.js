import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./page/Signup/Signup";


function App() {
  return (
    <div>
      <SignUp />
    </div>

    // <Router>
    //   <div className="min-h-screen flex items-center justify-center">
    //     <div className="max-w-md w-full">
    //       <AuthProvider>
    //         <Routes>
    //           <Route path="/forgetPassword" element={<ForgetPassword />} />
    //           <Route path="/Signup" element={<Signup />} />
    //           <Route path="/Login" element={<Login />} />
    //           <Route path="/" element={<PrivateRoute />}>
    //             <Route path="/" element={<Dashboard />} />
    //             <Route path="/update-profile" element={<UpdateProfile />} />
    //           </Route>
    //         </Routes>
    //       </AuthProvider>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
