import React from 'react';
import {RiSearchLine} from 'react-icons/ri';

const SearchBar = () => {
  return (
    <div className="relative mb-4">
  <input type="text" className="pl-10 pr-10 py-2 w-full rounded-md border border-gray-300 shadow-sm font-nunito" placeholder="Search by name" />
  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <RiSearchLine className="text-gray-400 w-4 h-4" />
  </span>
</div>
  )
}

export default SearchBar