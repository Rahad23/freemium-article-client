import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Account = () => {
    const { user, logoutUserAccount } = useContext(AuthContext);
  const handleDelete = () => {
    user.delete()
        .then(() => {
            // User deleted.
            toast.success("User Account Deleted Successful");
        })
        .catch((error) => {
            // An error ocurred
            // ...
        });
  }
  

    const handleLogOut = () => {
    logoutUserAccount()
      .then(() => {
        toast.success("User logout Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

    return (
        <div className='mt-8 leading-loose'>
             <div className='flex justify-between'>
                <p>Email address</p>
                <p>{ user.email}</p>
            </div>
             {/* <div className='flex justify-between'>
                <p>Username</p>
                <p>{ user.displayName}</p>
            </div> */}
             <div className='flex justify-between mt-6'>
                <p>Profile information</p>
                <p className='flex items-center'> {user.displayName}<span>{<img
                    className="w-8 ml-2 rounded-full"
                    src={user?.photoURL}
                    alt="profile pictures"
                  /> }</span></p>
            </div>
             <Link to='/membership' className='mt-8'>
                <h1>Custom domain</h1>
                <p >Upgrade to a FreeMium Membership to redirect your profile URL to a domain like yourdomain.com.</p>
            </Link>
            <div className="divider"></div> 


            <button className='w-full text-left leading-loose'  onClick={handleLogOut}>
            
            <p className='text-red-500'>Deactivate account</p>
                <p className='text-sm'>Deactivating will suspend your account until you sign back in.</p>
            </button>
            <button className='w-full text-left leading-loose'  onClick={handleDelete}>
            
            <p className='text-red-500'>Delete account
</p>
                <p className='text-sm'>Permanently delete your account and all of your content.</p>
            </button>
        </div>
    );
};

export default Account;