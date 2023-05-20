import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuestionsPage = () => {
  return (
    <div className="py-7">
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">How do I start writing on FreeMium?</h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            First, make a free account. Then, to create a story, click on your
            profile picture in the top-right corner of the page, then “Write a
            Story.”
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">
            How can I make money writing on FreeMium?
          </h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            If you join the FreeMium Partner Program, you can earn money based
            on how much time members spend reading your work and whenever you
            convert non-paying readers into members.
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">Who writes on FreeMium?</h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            Anyone can write on FreeMium. Whether you’ve never written before or
            are ready to create a full publication, it’s easy to get started and
            we allow you to focus more on big ideas and less on driving clicks.
            With the option to earn for your work, you can also be directly
            rewarded for the value you provide readers.
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">
            Do I need to be in the Partner Program to write on FreeMium?
          </h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            No. You can write on FreeMium even if you are not in the Partner
            Program. If you are in the Partner Program you can also choose which
            of the stories you publish are eligible for the Program. For more
            about the Partner Program, click here.
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">What can I write about on FreeMium?</h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            FreeMium’s designed for short stories that make someone’s day
            better, manifestos that change the world, and everything in between.
            It’s used by everyone from professional journalists to data
            scientists to amateur cooks. Whatever the topic, FreeMium helps you
            find the right audience for what you have to say.
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">
            Who can read the work I publish on FreeMium?
          </h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            Anyone on the internet can read your stories. Even if your story is
            being distributed in the Partner Program as a part of our metered
            paywall, anyone can still read a limited number of articles for free
            each month. If you want to share an un-metered version of your
            story, you can use a Friend Link.
          </p>
        </div>
      </div>
      <div className="collapse border-[1px] border-b-white border-x-0 border-t-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-black-450 text-white peer-checked:bg-black-450 peer-checked:text-white flex justify-between">
          <h4 className="text-2xl">
            How can I grow my audience with FreeMium?
          </h4>
          <FaLongArrowAltDown className="text-xl" />
        </div>
        <div className="collapse-content bg-black-450 text-black-450 peer-checked:bg-black-450 peer-checked:text-white">
          <p className="text-lg font-normal">
            FreeMium has a number of tools to connect you with over 100 million
            readers on the platform and beyond. Some ways you can build your
            audience are by starting a newsletter, submitting to publications,
            following the distribution standards, and sharing your stories on
            social media. We also encourage you to check out our blog, 3 Minute
            Read, for more helpful tips and tricks – like how to write a great
            headline and SEO tips to make your stories more discoverable.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <h5 className="text-xl mt-7 lg:mt-4 font-semibold text-gray-100">
          <Link to="/">Looking for help getting started?</Link>
        </h5>
        <button className="btn bg-gray-100 hover:bg-black-450 hover:text-white text-xl text-gray-900 border-0 hover:border-2 hover:border-gray-100 w-72 btn-accent mt-7 ml-7">
          start writing
        </button>
      </div>
    </div>
  );
};

export default QuestionsPage;
