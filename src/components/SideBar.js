import React from 'react';
import Logo from '../assets/logo.png';

const SideBar = () => {
  return (
    <div className='p-4 w-[226px] border-r border-gray-200'>
    <div className='flex justify-center items-center pb-4 border-b border-gray-200'>
        <img src={Logo} alt='Logo' className='w-[44px] h-[44px]'/>
        <h1 className='font-bold text-3xl font-nunito text-slate-800'>Stealth</h1>
    </div>
    <div className='mt-4 text-center bg-[#F0F3FC] rounded'>
        <h2 className='font-nunito font-semibold text-slate-800'>File Manager</h2>
    </div>
    </div>
  )
}

export default SideBar