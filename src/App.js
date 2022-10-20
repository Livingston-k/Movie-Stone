import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './SearchIcon.svg'
import MovieCard from './MovieCard'
const API_URL = 'http://www.omdbapi.com/?apikey=4d2d2f19'

const App = ()=>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await  response.json()
    setMovies(data.Search)
   }
  useEffect(()=>{
    searchMovies('Marvel')
  },[])
    return (
       <div className="app">
      <h1>Movie Stone</h1>
      <div className="search">
        <input
        placeholder='Search movies'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
        />

        <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
        />
       
      </div>
      {
        movies?.length > 0 ?(
            <div className="container">
              {
                movies.map((movie)=>(
                  <MovieCard movie={movie} />
                ))
              }
            </div>
        ):(
              <div className="empty">
              <h2>No Movies found</h2>
              </div>
        )
      }
       
       </div>

    )
}

export default App