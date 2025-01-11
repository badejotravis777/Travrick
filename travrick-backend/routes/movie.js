const express = require('express');
const { addMovie, getMovies, getMovieById } = require('../controllers/movieController');
const router = express.Router();

router.post('/add', addMovie); // Add a new movie
router.get('/', getMovies); // Get all movies
router.get('/:id', getMovieById); // Get a single movie by ID

module.exports = router;
