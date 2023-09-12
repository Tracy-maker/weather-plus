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
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="https://cuono.dev/video1.mp4" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">full Hero Video</h1>
        <h3 class="font-light text-3xl">with TailwindCSS</h3>
    </div>
</section>

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
