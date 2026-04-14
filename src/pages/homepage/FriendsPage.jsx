import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';
import { HashLoader } from 'react-spinners';
import useApps from '../../components/hooks/useApps';

const FriendsPage = () => {
  const {friends, loading} = useApps()

  console.log(friends, 'friends');
  return (
    <div>

      <div className='container mx-auto'>
        <h2 className='font-semibold text-2xl'>Your Friends</h2>

      { loading? <div className='flex justify-center items-center'><HashLoader /></div> :<div className='grid grid-cols-4 gap-4'>
          {
            friends.map((friend, ind) => {
              return (
              <FriendsCard key={ind} friend={friend}></FriendsCard>

              )
            })
          }
        </div>}
      </div>
    </div>
  );
};

export default FriendsPage;