import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${p3})` }}
      >
        <div>
          <p className="leading-loose text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-white font-custom my-5 sm:my-10 mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 font-bold tracking-wide">
            <h2>"Welcome to our whimsical weather wonderland!"</h2>
            ☀️ Here, you don't need to chase rainbows to find the forecast; just
            type in the name of your city, and we'll conjure up the most
            enchanting weather details for you. Whether you're in search of
            sunshine, showers, or snowflakes, our weather forecast spells it all
            out, not just for today but for the next five days as well. So, get
            ready to embark on a magical meteorological journey as we paint the
            skies with the latest updates for your favorite places. Let's
            sprinkle a little weather magic into your day ☃️ !
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
