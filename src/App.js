
import { useEffect, useState } from 'react';
import './App.css';
import BeerCard from './Card';
import SearchBar from './SearchBar';

function App() {

  const [beer, setBeer] = useState([])

  const getData = async () => {
    const responce = await fetch("https://api.punkapi.com/v2/beers/random")
    const data = await responce.json()
    setBeer(data)
  }

  const searchBeer = async (str) => {
    const responce = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${str}`)
    const data = await responce.json()
    setBeer(data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <SearchBar searchBeer={searchBeer} />
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
