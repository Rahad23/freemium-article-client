import React from 'react';
import './EarnManyWriting.css';
const EarnManyWriting = () => {
    return (
        <div className='earnWriting px-10 py-10'>
            <h1 className='lg:text-7xl text-5xl mt-16 font-medium font-serif text-gray-200'>Earn money from <br /> your writing.</h1>
            <p className='mt-7 text-lg font-semibold text-gray-900 lg:text-gray-200'>Writing has its rewards when you join the Partner Program. Learn <br /> how to get paid for the content you publish and the audiences <br /> you build.</p>
            <button className="btn bg-gray-900 hover:bg-[#2f5234] hover:text-white text-xl text-gray-100 border-0 hover:border-2 hover:border-[#ddd] w-72 btn-accent mt-7">learn more</button>
        </div>
    );
};

export default EarnManyWriting;