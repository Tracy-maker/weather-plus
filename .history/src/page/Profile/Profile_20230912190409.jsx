import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../app/Navbar/Navbar";


const Profile = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center" >
      <video controls width="640" height="360">
    <source src="your-video-file.mp4" type="video/mp4">
    <!-- You can add additional source elements for different video formats (e.g., WebM, Ogg) -->
    Your browser does not support the video tag.
  </video>
        <div className="bg-white w-full sm:w-96 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
          <strong>Email:</strong> {currentUser.email}
          <Link
            to="/update-profile"
            className="bg-blue-500 text-white p-2 block w-full mt-3 rounded-md text-center"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
