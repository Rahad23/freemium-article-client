import React from "react";
import { useContext } from "react";
import { useLottie } from "lottie-react";
import writingGif from "../../Lottie/Rander.json";
// import ParticlesComponent from '../../components/particleJS/Particle';
// import penimg from "../../Assets/pen-pic.png";
import penimg from "../../Assets/pen-pic.webp";
import { APIContext } from "../../contexts/APIProvider";
// import { useLottie } from "lottie-react";
// import journalist from "../../Lottie/Journalist.json";
import Fade from "react-reveal/Fade";
const HomeHadBanar = () => {
  // const options = {
  //   animationData: journalist,
  //   loop: true
  // };
  // const { View } = useLottie(options);
  const { isDarkMode } = useContext(APIContext);
  const options = {
    animationData: writingGif,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div className="flex lg:justify-around items-center lg:flex-row py-14">
      {/* import particle js */}
      <div className="w-11/12 mx-auto flex py-12">
        <Fade left>
          <div className="hero justify-start ">
            <div className="hero-content">
              <div className="lg:max-w-md max-w-prose">
                <h1
                  className={
                    isDarkMode
                      ? "lg:text-5xl text-3xl font-bold text-gray-100 uppercase lg:leading-tight leading-snug"
                      : "lg:text-5xl text-3xl font-bold text-gray-900 uppercase lg:leading-tight leading-snug"
                  }
                >
                  Publish Your Story And Share Your Passion
                </h1>
                <p
                  className={
                    isDarkMode
                      ? "lg:py-6 py-4 text-gray-200"
                      : "lg:py-6 py-4 text-gray-600"
                  }
                >
                  Join the Conversation and Make Your Mark: Publish Your Story
                  and Share Your Passion with the World. Your Voice Matters!
                </p>
                <button
                  className={
                    isDarkMode
                      ? "text-white py-2 px-4 bg-black-250 hover:bg-black-250 border-0 rounded-full"
                      : "text-white py-2 px-4 bg-black-250 hover:bg-black-250 border-0 rounded-full"
                  }
                >
                  Start Bloging
                </button>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div id="slideshow">{View}</div>
        </Fade>
      </div>
    </div>
  );
};

export default HomeHadBanar;
