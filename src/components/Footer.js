import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const curYear = new Date().getFullYear();
    setYear(curYear);
  }, []);

  return (
    <footer className='py-4 flex flex-col'>
      <div className='max-w-xs text-sm py-10 mx-4 self-center lg:self-end'>
        <span>
          All data pulled from Recipe Puppy, big thanks to them. Check them out
          here{' '}
        </span>
        <svg
          className='w-4 inline-block'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M16 17l-4 4m0 0l-4-4m4 4V3'></path>
        </svg>
        <a
          href='http://www.recipepuppy.com'
          className='block font-semibold hover:underline'
        >
          http://www.recipepuppy.com
        </a>
      </div>
      <p className='text-center font-semibold'>
        &copy; {year} -Coded by Kyle Lynch
      </p>
    </footer>
  );
};

export default Footer;
