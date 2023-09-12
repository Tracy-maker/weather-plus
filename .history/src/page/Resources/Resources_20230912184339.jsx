import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p4 from "../../assets/Resources.jpg"

const Resources = () => {
  return (
    <>
      <Navbar />
      <div  className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
        style={{ backgroundImage: `url(${p4})` }}></div>
    </>
  );
};

export default Resources;
