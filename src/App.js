
import { useEffect, useState } from 'react';
import './App.css';
import BeerCard from './Card';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeer } from './redux/action';

function App() {


  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchBeer())
  }, [])

  const beer = useSelector(store => store.beer)
  // console.log(store.beer)
 
  return (
    <>
      <SearchBar  />
      <div className='container p-14 grid grid-cols-3 gap-3'>
        {(!beer.length)
          ? <h1 className='text-center font-bold capitalize text-3xl'>beer not found</h1>
          : beer.map((beerData, i) => {
            return <BeerCard key={i} beerData={beerData} />
          })}

      </div>

    </>
  );
}

export default App;
