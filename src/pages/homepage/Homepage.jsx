import React from 'react';
import Banner from './Banner';
import FriendsPage from './FriendsPage';

const Homepage = () => {
  return (
    <div className='bg-base-200'>
   <Banner></Banner>
  <FriendsPage></FriendsPage>
     
    </div>
  );
};

export default Homepage;