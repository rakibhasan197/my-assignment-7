import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-4 shadow'>
      <h2 className='font-semibold text-3xl'>Keen<span className='text-green-900'>Keeper</span></h2>
    <ul className='flex gap-2 items-center'>
      <li><NavLink to={'/'} className={({isActive})=>`font-semibold flex items-center gap-2 ${isActive ? 'bg-green-900 text-white rounded-md py-2 px-4' : 'text-gray-500 rounded-md py-2 px-4'}`}><RiHome2Line /> Home</NavLink></li>

      <li><NavLink to={'/timeline'} className={({isActive})=>`font-semibold flex items-center gap-2 ${isActive ? 'bg-green-900 text-white rounded-md py-2 px-4' : 'text-gray-500 rounded-md py-2 px-4'}`}><RiTimeLine />Timeline</NavLink></li>

      <li><NavLink to={'/stats'} className={({isActive})=>`font-semibold flex items-center gap-2 ${isActive ? 'bg-green-900 text-white rounded-md py-2 px-4' : 'text-gray-500 rounded-md py-2 px-4'}`}><ImStatsDots />Stats</NavLink></li>
    </ul>
    </div>
  );
};

export default Navbar;