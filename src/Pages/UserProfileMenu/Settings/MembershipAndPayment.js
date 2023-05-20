import React from 'react';
import { Link } from 'react-router-dom';

const MembershipAndPayment = () => {
    return (
        <div className='leading-loose'>
            <div className='flex justify-between'>
                <p>Membership status</p>
                <p>Inactive</p>
            </div>
            <Link to="/payment" className='text-left mt-8'>
                <p>Upgrade to a FreeMium Membership</p>
                <p>Subscribe for unlimited access to the smartest writers and biggest ideas on FreeMium.</p>
            </Link>
        </div>
    );
};

export default MembershipAndPayment;