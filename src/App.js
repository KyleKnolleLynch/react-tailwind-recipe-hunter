import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Footer from './components/Footer';

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
          `${proxyurl}http://www.recipepuppy.com/api/?&q=${term}&p=10`
        );
        res = await res.json();
        setRecipes(res.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getRecipes();
  }, [term]);

  return (
    <div className='bg-teal-100 text-gray-700 min-h-screen'>
      <h1 className='text-4xl text-pink-700 ml-8 py-5'>Recipe Hunter</h1>
      <SearchBar setSearchTerm={(val) => setTerm(val)} />
      {!loading && recipes.length === 0 && (
        <h1 className='text-lg text-semibold text-red-600 bg-white p-6 w-1/2 mx-auto mt-10'>
          No matching results found. Please try a different search term.
        </h1>
      )}
      {loading ? (
        <h1 className='font-semibold text-3xl text-center'>Loading...</h1>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 pb-20 mx-8'>
          {recipes.map((recipe, index) => (
            <Card recipe={recipe} key={index} />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
