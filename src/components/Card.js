import React, { useState } from 'react';

const Card = ({ recipe: { title, thumbnail, ingredients, href } }) => {
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);

  return (
    <div className='bg-white rounded overflow-hidden shadow-md hover:shadow-lg my-4'>
      <img
        src={thumbnail}
        alt='pic not available'
        className='pl-4 pb-2 object-cover float-right rounded'
      />

      <div className='px-6 py-4'>
        <h1 className='font-bold text-pink-700 text-lg mb-4'>{title}</h1>
        <ul>
          <li className='mb-2'>
            <strong>Ingredients: </strong> {ingredients}
          </li>
          <li className='mb-2'>
            <strong>Directions: </strong>
            <a href={href} className='hover:underline pl-2 text-pink-500'>
              Visit Full Article{' '}
              <span>
                <svg
                  className='w-4 inline-block mb-1 ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className='px-2 py-4'>
        <span
          onClick={() => setLike(!like)}
          className='bg-teal-200 rounded-full px-3 py-2 mr-2 text-sm cursor-pointer'
        >
          <strong>Like: </strong>
          <span className={like ? 'text-pink-500 ' : 'text-gray-700 '}>
            <svg
              className='w-6 inline-block mb-1 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </span>
        <span
          onClick={() => setFav(!fav)}
          className='bg-teal-200 rounded-full px-3 py-2 mr-2 text-sm cursor-pointer'
        >
          <strong>Favorite: </strong>
          <span className={fav ? 'text-yellow-500 ' : 'text-gray-700 '}>
            <svg
              className='w-6 inline-block mb-1 ml-2'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
