import React from 'react';

const Card = ({ recipe: {title, thumbnail, ingredients, href} }) => {
  return (
    <div className='bg-white rounded overflow-hidden shadow-md my-4'>
      <img
        src={thumbnail}
        alt='pic not available'
        className='w-auto object-cover'
      />

      <div className='px-6 py-4 '>
        <h1 className='font-bold text-pink-700 text-lg mb-4'>{title}</h1>
        <ul>
          <li className='mb-2'>
            <strong>Ingredients: </strong> {ingredients}
          </li>
          <li className='mb-2'>
            <strong>Directions: </strong><a href={href} className='hover:underline pl-2 text-pink-500'>Click Here</a>
          </li>
          <li className='mb-2'>
            <strong>Likes: </strong> 45
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold mr-2'>
          #tag1
        </span>
        <span className='inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold mr-2'>
          #tag2
        </span>
        <span className='inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold mr-2'>
          #tag3
        </span>
      </div>
    </div>
  );
};

export default Card;
