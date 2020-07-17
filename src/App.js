import React, { useState, useEffect } from 'react';
import Card from './components/Card';

import './assets/main.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        let res = await fetch(
          `${proxyurl}http://www.recipepuppy.com/api/?&q=pizza&p=3`
        );
        res = await res.json();
        setRecipes(res.results);
      } catch (e) {
        console.log(e);
      }
    };

    getRecipes();
  }, []);
  console.log(recipes);

  return (
    <div className='bg-teal-100 text-gray-700 min-h-screen'>
      <h1 className='text-4xl text-pink-700 ml-8 py-5'>Recipe Hunter</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 pb-20 mx-8'>
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.title} />
        ))}
      </div>
     
      <footer className='flex justify-around text-center py-4'>
        <p className='self-end font-semibold'>Coded by Kyle Lynch</p>
        <div className='self-start w-1/4 text-sm py-10'>
        <span>
          All data pulled from Recipe Puppy, big thanks to them. Check them out
          here{' '}
        
        </span>
        <svg
            className='w-4 inline-block'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M16 17l-4 4m0 0l-4-4m4 4V3'></path>
          </svg>
        <a href='http://www.recipepuppy.com' className='block font-semibold hover:underline'>
          http://www.recipepuppy.com
        </a>
      </div>
      </footer>
    </div>
  );
};

export default App;
