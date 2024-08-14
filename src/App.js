import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.6
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const addMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('https://image.tmdb.org/t/p/w500/{poster_path}:'),
      rating: parseFloat(prompt('Enter movie rating:'))
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= parseFloat(ratingFilter || 0)
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter 
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;