
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './comp/movie';

const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm]=useState("");

  useEffect(() => {
    fetch(APIURL)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const submitHandler=(e)=>{
    e.preventDefault();

    if(searchTerm){
      fetch(SEARCHAPI + searchTerm)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
    });

    setsearchTerm("");
    }
  }

  const onchangeHandle=(e)=>{
    setsearchTerm(e.target.value);
  }

  return (
    <div>
       <header>
         <h1>CineLab</h1>
         </header>
         <div className="search-bar">
           <form onSubmit={submitHandler}>
           <input className="search" 
           type="search" 
           placeholder="Search Movie.."
           value={searchTerm}
           onChange={onchangeHandle}/>
           </form>
         </div>
      <div className="AppB">
    {Movies.map(mov=>(
      <Movie key={mov.id} {...mov}/>
    ))}
    </div>
    </div>
  );
}

export default App;
