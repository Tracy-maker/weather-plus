import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p4 from "../../assets/Resources.jpg";
import Typewriter from "typewriter-effect";

const Resources = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
        style={{ backgroundImage: `url(${p4})` }}
      >
        <div className="text-2xl text-white font-custom pt-6 px-20">
          <Typewriter
            options={{
              strings: ["Back-end and data management"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-xl text-white font-custom my-4 mx-50 font-bold tracking-wide leading-10">
            💻 Here, you don't need to chase rainbows to find the forecast; just
            type in the name of your city, and we'll conjure up the most
            enchanting weather details for you.
          </p>
        </div>
        <div className="text-2xl text-white font-custom pt-6 px-20">
          <Typewriter
            options={{
              strings: ["Frontend"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-xl text-white font-custom my-4 mx-50 font-bold tracking-wide leading-10">
            ⌨️ Here, you don't need to chase rainbows to find the forecast; just
            type in the name of your city, and we'll conjure up the most
            enchanting weather details for you.
          </p>
        </div>
        <div className="text-2xl text-white font-custom pt-6 px-20">
          <Typewriter
            options={{
              strings: ["API"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-xl text-white font-custom my-4 mx-50 font-bold tracking-wide leading-10">
            🖥 Here, you don't need to chase rainbows to find the forecast; just
            type in the name of your city, and we'll conjure up the most
            enchanting weather details for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
