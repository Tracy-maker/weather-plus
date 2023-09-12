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
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/297927791.sd.mp4?s=5ceeec8c83fcb634312c157cc101b8bd19969b61&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Content Overlay */}
        <div className="text-center bg-white bg-opacity-80 w-full sm:w-96 p-4 rounded-md shadow-md backdrop-blur-md">
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
