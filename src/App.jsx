
import './App.css';
import Card from './Card';
import movies from './Movies';
function App() {
 

  return (
    <div className="App">
      <div className='card-container'>
        {movies.map(movies=> (
          <Card key={movies.id} name={movies.name} genre={movies.genre} Release={movies.releaseYear} url={movies.bannerUrl} /> 
        ))}
      </div>
    </div>
  );
}

export default App;
