import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${p3})` }}
      >
        <div className="text-2xl text-white font-custom">
          <Typewriter
            options={{
              strings: [
                  "Welcome to our whimsical weather wonderland!"
              ],
              autoStart: true,
              loop: true,
           
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
