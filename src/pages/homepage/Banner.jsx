import React from 'react';

const Banner = () => {
  return (
    <div className='container mx-auto my-12 px-4'>

     
      <div className='text-center space-y-4 mt-10'>

        <h2 className='font-bold text-2xl sm:text-3xl md:text-5xl leading-tight'>
          Friends to keep close in your life
        </h2>

        <p className='text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        <button className='btn bg-green-900 text-white px-6 py-2'>
          + Add a Friend
        </button>

      </div>

    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>

        <div className='shadow rounded-md p-5 text-center'>
          <h4 className='font-bold text-green-900 text-2xl'>10</h4>
          <p className='text-gray-500 font-semibold'>Total Friends</p>
        </div>

        <div className='shadow rounded-md p-5 text-center'>
          <h4 className='font-bold text-green-900 text-2xl'>3</h4>
          <p className='text-gray-500 font-semibold'>On Track</p>
        </div>

        <div className='shadow rounded-md p-5 text-center'>
          <h4 className='font-bold text-green-900 text-2xl'>6</h4>
          <p className='text-gray-500 font-semibold'>Need Attention</p>
        </div>

        <div className='shadow rounded-md p-5 text-center'>
          <h4 className='font-bold text-green-900 text-2xl'>12</h4>
          <p className='text-gray-500 font-semibold'>Interactions This Month</p>
        </div>

      </div>

    </div>
  );
};

export default Banner;