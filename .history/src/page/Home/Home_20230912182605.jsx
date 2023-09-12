import React from "react";
import Navbar from "../../app/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
        style={{ backgroundImage: `url(${p1})` }}
      ></div>
    </>
  );
};

export default Home;
