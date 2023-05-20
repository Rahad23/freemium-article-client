import React from "react";
import { rotateIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Link } from "react-router-dom";

const OurStory = () => {
  const styles = {
    rotateIn: {
      animation: "y 5s",
      animationName: Radium.keyframes(rotateIn, "rotateIn"),
    },
  };
  return (
    <div>
      <h1 className="text-center text-4xl md:text-5xl lg:text-8xl my-32 font-semibold font-sans">
        Every idea needs a <span className="font-bold">Medium.</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border">
          <p className="m-14 font-semibold">
            The best ideas can change who we are. Freemium is where those ideas
            take shape, take off, and spark powerful conversations. We’re an
            open platform where over 100 million readers come to find insightful
            and dynamic thinking. Here, expert and undiscovered voices alike
            dive into the heart of any topic and bring new ideas to the surface.
            Our purpose is to spread these ideas and deepen understanding of the
            world. We’re creating a new model for digital publishing. One that
            supports nuance, complexity, and vital storytelling without giving
            in to the incentives of advertising. It’s an environment that’s open
            to everyone but promotes substance and authenticity. And it’s where
            deeper connections forged between readers and writers can lead to
            discovery and growth. Together with millions of collaborators, we’re
            building a trusted and vibrant ecosystem fueled by important ideas
            and the people who think about them.
          </p>
        </div>
        <StyleRoot className="border">
          <div style={styles.rotateIn}>
            <img
              className="m-14 w-5/6"
              src="https://i.ibb.co/w6JsdHZ/article-writing-removebg-preview.png"
              alt=""
            />
          </div>
        </StyleRoot>
      </div>
      <div className="bg-[#ffd1b9]">
        <h1 className="text-center font-medium  lg:text-7xl text-5xl mx-5 md:mx-32 lg:mx-48 mb-5">
          A living network of <br /> curious minds.
        </h1>
        <p className="mx-16 md:mx-36 lg:mx-96 font-semibold">
          Anyone can write on Freemium. Thought-leaders, journalists, experts,
          and individuals with unique perspectives share their thinking here.
          You’ll find pieces by independent writers from around the globe,
          stories we feature and leading authors, and smart takes on our own
          suite of blogs and publications.
        </p>
        <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-3">
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://i.ibb.co/bKtcK1V/professional-Picture-Real.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Rakibul Islam Rakib</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12  rounded-full"
              src="https://i.ibb.co/bKtcK1V/professional-Picture-Real.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Rakibul Islam Rakib</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://i.ibb.co/bKtcK1V/professional-Picture-Real.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Rakibul Islam Rakib</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Mark Schaefer</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Mark Schaefer</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Mark Schaefer</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://i.ibb.co/yV0kPRJ/20181226-154653-01-1.jpg"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Al Kafee</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://i.ibb.co/yV0kPRJ/20181226-154653-01-1.jpg"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Al Kafee</h2>
          </div>
          <div className="flex mb-5">
            <img
              className="w-12 rounded-full"
              src="https://i.ibb.co/yV0kPRJ/20181226-154653-01-1.jpg"
              alt=""
            />
            <h2 className="ml-5 font-semibold mt-2">Al Kafee</h2>
          </div>
        </div>
      </div>
      <div className="text-black-250">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black">
          <div className="border flex lg:justify-center lg:items-center">
            <h1 className="m-8 text-4xl lg:text-8xl font-semibold pr-20">
              Over 100 million readers and growing.
            </h1>
          </div>
          <div className="border">
            <img
              className="m-10 w-40  rounded-full"
              src="https://i.ibb.co/qdqbwxr/Md-Al-Kafee.jpg"
              alt=""
            />

            <p className="text-black-350  mx-16 lg:mr-48 mb-10 font-semibold text-lg">
              "Freemium is a great place to read and learn from a wide range of
              authors. It’s not muddied up by ads. It feels like one of the few
              pure places to go online." <br /> <br />
              Sojeeb Islam
            </p>
          </div>
        </div>
        <div className="bg-black text-black-350  py-10">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-center mx-10 md:mx-16  lg:mx-44 font-semibold">
            Create the space for your thinking to take off.
          </h2>
          <p className="mx-16 lg:mx-96 my-5 text-center font-semibold">
            A blank page is also a door. At Freemium you can walk through it.
            It's easy and free to share your thinking on any topic, connect with
            an audience, express yourself with a range of publishing tools, and
            even earn money for your work.
          </p>
          <Link to="" className="flex justify-center">
            <button className="text-green-600 btn btn-outline rounded-full border-green-600">
              Write On Freemium
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-green-600 text-white  py-10">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-center mx-10 md:mx-16  lg:mx-44 font-semibold">
            Get more with membership.
          </h2>
          <p className="mx-16 lg:mx-96 my-5 text-center font-semibold">
            Become a Freemium member to enjoy unlimited access and directly
            support <br /> the writers you read most.
          </p>
          <Link to="" className="flex justify-center">
            <button className="text-white btn btn-outline rounded-full border-white">
              See Membership Options
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-green-600">
          <div className="border  lg:justify-center lg:items-center">
            <h1 className="m-8 text-4xl  font-semibold text-white ">
              Read as much as you want.
            </h1>
            <img
              className="h-64 "
              src="https://i.ibb.co/Fn2K8HV/360-F-335937452-Kym-RAu0wm-Am-Yi-Rrif4-Aglx-Kz28-Iz-Lv-ZW-removebg-preview.png"
              alt=""
            />
            <p className="m-8 font-semibold text-white ">
              Enjoy unlimited access to every story across all of your devices.
            </p>
          </div>
          <div className="border  lg:justify-center lg:items-center">
            <h1 className="m-8 text-4xl  font-semibold text-white ">
              Reward quality content.
            </h1>
            <img
              className="h-64"
              src="https://i.ibb.co/0CSccCB/content-writing-removebg-preview.png"
              alt=""
            />
            <p className="m-8 font-semibold text-white ">
              Your membership helps us pay writers, and keeps your experience
              ad-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
