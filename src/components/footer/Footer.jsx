import React from 'react';
import instagramImg from '../../assets/instagram.png'
import facebookImg from '../../assets/facebook.png'
import twitterImg from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className='mt-20 bg-green-900 p-6 sm:p-10'>

     
      <div className='space-y-3'>

        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white'>
          KeenKeeper
        </h2>

        <p className='text-gray-200 text-center text-sm sm:text-base'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className='mt-5 text-gray-200 text-center font-semibold'>
          Social Links
        </p>

        <div className='flex justify-center items-center gap-3 mt-5'>
          <img src={instagramImg} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={facebookImg} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
          <img src={twitterImg} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
        </div>

      </div>

      
      <div className='flex flex-col sm:flex-row justify-between items-center container mx-auto mt-10 gap-4'>

        <h2 className='text-gray-200 text-center sm:text-left text-sm sm:text-base'>
          © 2026 KeenKeeper. All rights reserved.
        </h2>

        <ul className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 text-gray-200 text-sm sm:text-base'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>

      </div>

    </footer>
  );
};

export default Footer;