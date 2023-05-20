import React from 'react';
import { Link } from 'react-router-dom';

const Drafts = () => {
    return (
        <div className='p-20 text-center'>
            <p className='mb-8'>You have no drafts.</p>
            <Link to='/write-stories' className='link'>Write</Link>
            <span> a story or </span>
            <Link to='/' className='link'>read </Link>
            <span>on FreeMium</span>

        </div>
    );
};

export default Drafts;