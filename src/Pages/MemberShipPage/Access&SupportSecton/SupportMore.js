import React from 'react';
import img from '../../../Assets/SupportWriters.svg'
const SupportMore = () => {
    return (
        <div>
            <article className="overflow-hidden bg-[#4171f8] ">
  

  <div className=" p-4 sm:p-6">
   
      <h3 className="my-5 text-5xl  text-white">
      Support the voices you want to hear more from.
      </h3>
  
    <img
    alt="Office"
    src={img}
    className=" object-cover"
  />

    <p className="mt-2 text-lg font-medium  text-white line-clamp-3">
    A portion of your membership will directly support the writers and thinkers you read the most.
    </p>
  </div>
</article>
        </div>
    );
};

export default SupportMore;