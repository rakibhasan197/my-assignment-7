import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto'>
          <div className=' text-center space-y-3 mt-10'>
        <h2 className='font-bold text-5xl text-center'>Friends to keep close in your life</h2>
        <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.</p>
        <button className='btn bg-green-900 text-white'>+ Add a Friend</button>
      </div>

      <div className='grid grid-cols-4 justify-center items-center gap-2 my-6 container mx-auto'>
        <div className='py-5 px-8 shadow rounded-md'>
          <h4 className='font-semibold text-center text-green-900 text-xl'>10</h4>
          <p className='text-gray-500 text-center font-semibold'>Total Friends</p>
        </div>
        <div className='py-5 px-8 shadow rounded-md'>
          <h4 className='font-semibold text-center text-green-900 text-xl'>3</h4>
          <p className='text-gray-500 text-center font-semibold'>On Track</p>
        </div>
        <div className='py-5 px-8 shadow rounded-md'>
          <h4 className='font-semibold text-center text-green-900 text-xl'>6</h4>
          <p className='text-gray-500 text-center font-semibold'>Need Attention</p>
        </div>
        <div className='py-5 px-8 shadow rounded-md'>
          <h4 className='font-semibold text-center text-green-900 text-xl'>12</h4>
          <p className='text-gray-500 text-center font-semibold'>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;