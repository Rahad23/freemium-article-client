import React from 'react';
import { useContext } from 'react';
import WriterAvatarImg from './WriterAvatarImg/WriterAvatarImg';
import { APIContext } from './../../../../contexts/APIProvider';

const TotalFollowerAndTotalArticle = () => {
   const {isDarkMode} = useContext(APIContext);
    return (
       <div className='border-[1px] border-[#ddd] pb-10 pt-0 border-t-0 border-x-0'>
         <div className='flex items-center lg:w-56 mt-8 justify-evenly lg:justify-between'>
          <div>
          <h1 className={isDarkMode ? 'text-2xl text-gray-100 font-bold':'text-2xl text-gray-900 font-bold'}>277k</h1>
          <span className={isDarkMode ? 'text-gray-100 font-semibold':'text-gray-900 font-semibold'}>Stories</span>
          </div>
           <div>
           <h1 className={isDarkMode ? 'text-2xl text-gray-100 font-bold':'text-2xl text-gray-900 font-bold'}>60k</h1>
           <span className={isDarkMode ? 'text-gray-100 font-semibold':'text-gray-900 font-semibold'}>Writers</span>
           </div>
        </div>
        <div className='flex justify-center lg:justify-start'>
           <WriterAvatarImg />
        </div>
       </div>
    );
};

export default TotalFollowerAndTotalArticle;