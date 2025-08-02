// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...
const recommend = (movie, minRating = 8) => {
  return movie.rating >= minRating;
};

const recommendedMovies = movies.filter(movie => recommend(movie));

const movieList = recommendedMovies.map(movie => 
  `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`
);

console.log("Recommended Movies:");
movieList.forEach(title => console.log(title));


