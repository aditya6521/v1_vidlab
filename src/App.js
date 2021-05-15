
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './comp/movie';

const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(APIURL)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div className="App">
    {Movies.map(mov=>(
      <Movie key={mov.id} {...mov}/>
    ))}
    </div>
  );
}

export default App;
