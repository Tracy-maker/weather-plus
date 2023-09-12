import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../app/Navbar/Navbar";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen">
        {/* Video Container */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/334034649.sd.mp4?s=b69ed030678f783042abb117217b23272ec15eaa&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Content Overlay */}
        <div className="bg-white bg-opacity-80 w-full sm:w-96 p-4 rounded-md shadow-md backdrop-blur-md">
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
