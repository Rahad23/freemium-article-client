import React from 'react';

const CreateSpacePageText = () => {
    return (
        <div className='border-[1px] lg:border-y-gray-900  lg:grid grid-cols-2 p-10 border-l-0 border-r-0 flex flex-col'>
           <div className='border-[1px] px-4 lg:border-r-gray-900 border-l-0 border-t-0 border-b-0'>
            <h1 className='text-4xl font-semibold text-gray-900'>Start a blog.</h1>
            <p className='mt-6 font-semibold text-gray-900'>Create a blog for free to have a personalized home for your writing. Brand your space and share your writing with readers on any device.</p>
           </div>
           <div className='px-4 mt-8 lg:mt-0'>
            <h1 className='text-4xl font-semibold text-gray-900'>Start a publication.</h1>
            <p className='mt-6 font-semibold text-gray-900'>Collaborate with others or publish under a brand name. Use our story submission system and expressive customization options.</p>
           </div>
        </div>
    );
};

export default CreateSpacePageText;