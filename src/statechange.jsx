import React, { useState } from "react";
import movies from "./Movies";

function Chan() {
  const [searchValue, setSearchValue] = useState(""); // state for search
  const [movieList] = useState(movies); // state for movies (kept fixed here)
  console.log("All movies:", movieList);

   const handlechange = (e) => {
     setSearchValue(e.target.value);
   };
  console.log("Current searchValue:", searchValue);

  // filter movies based on search
  console.log(searchValue)
  const filter_movies = movieList.filter(movie =>{
    movie.name.toLowerCase().includes(searchValue.toLowerCase())

  }
    
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      />

      <ul>
        {filter_movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chan;
