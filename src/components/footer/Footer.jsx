import React from 'react';
import instagramImg from '../../assets/instagram.png'
import facebookImg from '../../assets/facebook.png'
import twitterImg from '../../assets/twitter.png'

const Footer = () => {
  return (
   <footer className='mt-20 bg-green-900 p-10'>
    {/* first div area */}
    <div className='space-y-3'>
      <h2 className='text-5xl font-bold text-center text-white'>KeenKeeper</h2>
      <p className='text-gray-200 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      <p className='mt-5 text-gray-200 text-center font-semibold'>Social Links</p>
      <div className='flex justify-center items-center gap-3 mt-5'>
       <img src={instagramImg} alt="" />
       <img src={facebookImg} alt="" />
       <img src={twitterImg} alt="" />
      </div>
    </div>

    {/* second div area */}
    <div className='flex justify-between items-center container mx-auto mt-15'>
      <h2 className='text-gray-200'>© 2026 KeenKeeper. All rights reserved.</h2>
      <ul className='flex justify-center items-center gap-10 text-gray-200'>
        <li>Privacy Policy </li>
        <li>Terms of Service</li>
        <li>Cookies</li>
      </ul>
    </div>
   </footer>
  );
};

export default Footer;