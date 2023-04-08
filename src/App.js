import React, { useEffect, useState } from 'react';
import Navbar from './Componets.js/Navbar';
import Characters from './Componets.js/Characters';
import Pagination from './Componets.js/Pagination.js'



function App() {
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([])
  const initialUrl = "https://rickandmortyapi.com/api/character";
  

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info);
      } )
      .catch(error => console.log(error))
  };

  const onPrevious =()=>{
  fetchCharacters(info.prev) ;
  }

  const onNext =()=>{
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <div className="App">
        <Navbar brand='Rick & Morty App' />
      </div>

      <div className='container mt-5'>
        <Pagination prev = {info.prev} next= {info.next} onPrevious={onPrevious} onNext ={
         onNext }/>
      <Characters characters={characters} />
      <Pagination prev = {info.prev} next= {info.next} onPrevious={onPrevious} onNext ={
         onNext } />
      </div>
    </>
  );
}

export default App;
