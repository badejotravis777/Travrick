const Movie = require('../models/Movie');

// Add a new movie
exports.addMovie = async (req, res) => {
  const { title, description, genre, thumbnail, videoUrl, releaseDate } = req.body;
  try {
    const movie = new Movie({ title, description, genre, thumbnail, videoUrl, releaseDate });
    await movie.save();
    res.status(201).json({ message: 'Movie added successfully', movie });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get a single movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
