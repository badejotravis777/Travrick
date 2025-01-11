const express = require('express');
const { addToWatchlist, getWatchlist, removeFromWatchlist } = require('../controllers/watchlistController');
const router = express.Router();

router.post('/add', addToWatchlist); // Add a movie to the watchlist
router.get('/:userId', getWatchlist); // Get user's watchlist
router.delete('/remove', removeFromWatchlist); // Remove a movie from the watchlist

module.exports = router;
