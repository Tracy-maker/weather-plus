import React from "react";
import Navbar from "../../app/Navbar/Navbar";
import p3 from "../../assets/Home.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen justify-center items-center bg-cover bg-no-repeat bg-center text-2xl text-white font-custom"
        style={{ backgroundImage: `url(${p3})` }}
      >
        "Welcome to our whimsical weather wonderland! Here, you don't need to
        chase rainbows to find the forecast; just type in the name of your city,
        and we'll conjure up the most enchanting weather details for you.
        Whether you're in search of sunshine, showers, or snowflakes, our
        weather forecast spells it all out, not just for today but for the next
        five days as well. So, get ready to embark on a magical meteorological
        journey as we paint the skies with the latest updates for your favorite
        places. Let's sprinkle a little weather magic into your day!"
      </div>
    </>
  );
};

export default Home;
