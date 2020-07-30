import React, { useState } from 'react';

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='col-span-1'>
      <nav>
        <div className='flex items-center justify-between p-4'>
          <h1 className='font-bold text-xl text-pink-700'>
            <a href='/'>Recipe Hunter</a>
          </h1>
          <div
            className='w-6 text-pink-700 cursor-pointer md:hidden'
            onClick={() => setShow(!show)}
          >
            <svg fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </div>
        <ul
          className={show ? 'block text-right' : 'hidden md:block text-right'}
        >
          <li className='pb-5'>
            <a
              href='/'
              className='pr-3 border-r-4 border-transparent hover:border-pink-700'
            >
              Home
            </a>
          </li>
          <li className='pb-5'>
            <a
              href='!#'
              className='pr-3 border-r-4 border-transparent hover:border-pink-700'
            >
              About
            </a>
          </li>
          <li className='pb-5'>
            <a
              href='!#'
              className='pr-3 border-r-4 border-transparent hover:border-pink-700'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
