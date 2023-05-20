import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIContext } from '../../../contexts/APIProvider';

const Following = () => {
    const { isDarkMode } = useContext(APIContext);
    return (
        <div className={isDarkMode ? "mt-5 text-gray-100":"mt-5 text-gray-900"}>
            <h1>Writers</h1>
            <div className="divider"></div> 
            <h1>Publications</h1>
            <p>You haven followed any publications yet.</p>
            <Link className='link-success'>See suggestions</Link>
            <div className="divider"></div> 
            <h1>Topics</h1>
            <p>You haven’t followed any topics yet.</p>
            <Link className='link-success'>See suggestions</Link>
            <div className="divider"></div> 
        </div>
    );
};

export default Following;