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
            💻 Firebase powers the project's user management, providing secure
            login, registration, and authentication processes. This integration
            ensures user confidence in accessing the app's features, with robust
            identity verification and access control, bolstering trust and
            reliability. .
          </p>
        </div>
        <div className="text-2xl text-white font-custom pt-6 px-20">
          <Typewriter
            options={{
              strings: ["Front-end technologies"],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-xl text-white font-custom my-4 mx-50 font-bold tracking-wide leading-10">
            ⌨️ The main project utilizes a front-end technology stack that
            includes React, React Router, Tailwind CSS, Momentum Timezone, React
            Select Async Paginate,github, and Axios.
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
            🖥 The data for the Api is pulled from the following two websites
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
