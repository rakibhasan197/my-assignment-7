import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <div className='bg-base-200'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>


        <ToastContainer
        position='top-center' />
    </div>
  );
};

export default RootLayout;