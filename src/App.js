
import './App.css';
import Movie from './comp/movie';


function App() {
  const Movies=["1","2","4","5"]


  return (
    <div className="App">
    {Movies.map(mov=>(
      <Movie/>
    ))}
    </div>
  );
}

export default App;
