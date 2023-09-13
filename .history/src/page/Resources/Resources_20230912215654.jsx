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
        <div className="text-2xl text-white font-custom pt-14 px-20">
          <Typewriter
            options={{
              strings: ["Welcome to our whimsical weather wonderland!"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-2xl text-white font-custom my-20 mx-50 font-bold tracking-wide leading-10">
            💻 Here, you don't need to chase rainbows to find the forecast; just
            type in the name of your city, and we'll conjure up the most
            enchanting weather details for you. Whether you're in search of
            sunshine, showers, or snowflakes, our weather forecast spells it all
            out, not just for today but for the next five days as well. So, get
            ready to embark on a magical meteorological journey as we paint the
            skies with the latest updates for your favorite places. Let's
            sprinkle a little weather magic into your day ☃️!
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
