import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    `font-semibold flex items-center gap-2 px-4 py-2 rounded-md ${
      isActive ? 'bg-green-900 text-white' : 'text-gray-500'
    }`;

  return (
    <div className='shadow py-4 px-6'>

   
      <div className='flex flex-col md:flex-row md:justify-between md:items-center items-center'>

     
        <h2 className='font-semibold text-3xl mb-3 md:mb-0'>
          Keen<span className='text-green-900'>Keeper</span>
        </h2>

      
        <ul className='flex md:flex-row items-center gap-3'>

          <li>
            <NavLink to='/' className={linkClass}>
              <RiHome2Line /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/timeline' className={linkClass}>
              <RiTimeLine /> Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to='/stats' className={linkClass}>
              <ImStatsDots /> Stats
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Navbar;