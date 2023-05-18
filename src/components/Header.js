import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full border-b border-[#DCE0E3] p-4 px-10'>
        <h1 className='font-semibold text-3xl font-nunito text-slate-700'>File Manager</h1>
        <button className='px-4 py-2 flex justify-around items-center font-nunito bg-[#814EE7] rounded-sm text-white text-sm'><AiOutlinePlus size={15} className='mr-2'/>Upload</button>
    </div>
  )
}

export default Header