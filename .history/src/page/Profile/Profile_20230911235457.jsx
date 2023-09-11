import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Profile=()=> {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/Login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full sm:w-96 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className="bg-blue-500 text-white p-2 block w-full mt-3 rounded-md text-center">
          Update Profile
        </Link>
      </div>
      <div className="mt-2 text-center w-full">
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
