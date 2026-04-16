import React from 'react';
import FriendsCard from './FriendsCard';
import { HashLoader } from 'react-spinners';
import useApps from '../../components/hooks/useApps';

const FriendsPage = () => {
  const { friends, loading } = useApps();

  return (
    <div className='container mx-auto px-4 py-6'>

      <h2 className='font-semibold text-2xl mb-8 text-center md:text-left'>
        Your Friends
      </h2>

      {loading ? (
        <div className='h-[60vh] flex justify-center items-center'>
          <HashLoader color="#36d7b7" />
        </div>
      ) : friends.length === 0 ? (
        <p className='text-center text-gray-500 font-semibold'>
          No friends found 😴
        </p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {friends.map((friend, ind) => (
            <div
              key={ind}
              className='transition-transform duration-300 hover:scale-105'
            >
              <FriendsCard friend={friend} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default FriendsPage;