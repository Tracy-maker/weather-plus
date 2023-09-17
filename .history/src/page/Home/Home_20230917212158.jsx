import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${p3})` }}
      >
        <div className="pt-8 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
          <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <p className="leading-loose sm:text-lg md:text-xl lg:text-xl xl:text-xl text-white font-custom my-5 sm:my-8 md:my-10 lg:my-10 xl:my-12 font-bold tracking-wide">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-4">
                "Welcome to our whimsical weather wonderland!"
              </h2>
              ☀️ Here, you don't need to chase rainbows to find the forecast;
              just type in the name of your city, and we'll conjure up the most
              enchanting weather details for you. Whether you're in search of
              sunshine, showers, or snowflakes, our weather forecast spells it
              all out, not just for today but for the next five days as well.
              So, get ready to embark on a magical meteorological journey as we
              paint the skies with the latest updates for your favorite places.
              Let's sprinkle a little weather magic into your day ☃️ !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
