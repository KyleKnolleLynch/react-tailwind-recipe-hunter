import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [val, setVal] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(val);
    setVal('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='flex justify-center items-center mx-2'>
        <input
          id='searchBar'
          className='bg-white shadow focus:outline-none focus:border-pink-700 border  rounded-lg mr-3 py-2 px-4 block w-full md:w-3/5 lg:w-1/2 appearance-none leading-normal'
          type='text'
          placeholder='Enter dish or ingredient...'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className='bg-transparent text-pink-500 border border-pink-500 hover:border-transparent hover:bg-pink-500 hover:text-white rounded px-4 py-2 font-bold shadow focus:outline-none transition ease-out duration-500'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
