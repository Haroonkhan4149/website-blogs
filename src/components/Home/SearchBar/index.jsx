import React from 'react';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='bg-gray-100 w-fit mx-auto mb-16 mt-10 p-2 rounded'>
    <form className='flex items-center' onSubmit={formSubmit}>
      <input className='bg-gray-100 outline-none border-none'
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span className='pr-2 cursor-pointer' onClick={clearSearch}>X</span>}
      <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>Go</button>
    </form>
  </div>
);

export default SearchBar;