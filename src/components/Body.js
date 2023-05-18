import React from 'react'
import SearchBar from './SearchBar'
import Categories from './Categories'
import AllItems from './AllItems'

const Body = () => {
  return (
    <div className='bg-[#F0F3FC] h-full p-8 pt-8 text-slate-700'>
      <div className='mr-20'>
        <div className='flex items-center justify-end'>
            <SearchBar/>
        </div>
        <div className='flex jutsify justify-between'>
            <Categories/>
            <AllItems/>
        </div>
        </div>
    </div>
  )
}

export default Body