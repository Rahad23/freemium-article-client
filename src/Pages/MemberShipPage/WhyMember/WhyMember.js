import React from "react";
import img1 from "../../../Assets/img1.jpg";

const WhyMember = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="">
            {/* max-w-3xl */}
            <h2 className="text-5xl text-black  sm:text-4xl text-center">
              Why I'm a Freemium Member...
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full text-end flex justify-end items-center">
              {/* <img
          alt="Party"
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        /> */}

              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
                  <img src={img1} alt="img" />
                </div>
              </div>
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-xl text-black font-medium">
                <p>
                  "For me, the access to a variety of ideas and perspectives is
                  invaluable. Freemium brings people from all over into one
                  shared space where we can grow and learn together."
                </p>
                <h1 className="text-2xl font-medium text-black">Joseph Coco</h1>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyMember;
