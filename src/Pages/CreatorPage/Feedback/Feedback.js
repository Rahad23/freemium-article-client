import React from 'react';
import { useContext } from 'react';
import { APIContext } from '../../../contexts/APIProvider';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedback = () => {
    const {isDarkMode} = useContext(APIContext);
    return (
        <div className={isDarkMode ?'mt-28':'mt-28 bg-[#FFFFFF]'}>
            <h1 className='text-4xl text-center text-gray-900 font-semibold'>Why I'm a Medium Member...</h1>
           <FeedbackCard />
        </div>
    );
};

export default Feedback;