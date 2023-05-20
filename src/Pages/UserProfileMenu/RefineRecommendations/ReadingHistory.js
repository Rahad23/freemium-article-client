import React from 'react';

const ReadingHistory = () => {
    return (
        <div>
            <div className='flex justify-between bg-slate-300 p-4 rounded-lg'>
                <p>You can clear your reading history for a fresh start.</p>
                <button className='btn btn-error text-white rounded-full btn-sm'>Clear history</button>
            </div>
        </div>
    );
};

export default ReadingHistory;