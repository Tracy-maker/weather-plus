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
            src="https://v.ftcdn.net/03/11/22/37/240_F_311223791_152jV6qAZsEhwd7MTazoWfOwgbzv0Lps_ST.mp4"
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
