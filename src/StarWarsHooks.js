import { useState, useEffect } from 'react'
import axios from 'axios'

export default function SWFilms(){  
  const [number, setNumber] = useState(1)
  const [movie, setMovie] = useState()
  const [openingCrawl, setOpeningCrawl] = useState()
  
  useEffect(()=> {
    async function getFilms(){
      const filmNum = await axios.get(`https://swapi.dev/api/films/${number}/`)
      setMovie(filmNum.data.title)
      setOpeningCrawl(filmNum.data.opening_crawl)
    }
    getFilms()
  }, [number])//useEffect will only run when number is changed
  
  return(
    <div>
      <h1>Choose your favorite Star Wars movie</h1>
      <h4>You Chose Star Wars: {movie}</h4>
      <select value={number} onChange = {e => setNumber(e.target.value)}>     
      <option value='1'>1</option>     
      <option value='2'>2</option>     
      <option value='3'>3</option>     
      <option value='4'>4</option>     
      <option value='5'>5</option>     
      <option value='6'>6</option>          
      </select>
      <p style={{width: '50%', textAlign: 'center', margin: 'auto'}}>{openingCrawl}</p>
    </div>
  )
}