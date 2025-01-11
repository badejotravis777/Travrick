const User = require('../models/User');
const Movie = require('../models/Movie');

// Add a movie to the user's watchlist
exports.addToWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.watchlist.includes(movieId)) {
      return res.status(400).json({ message: 'Movie already in watchlist' });
    }

    user.watchlist.push(movieId);
    await user.save();
    res.status(200).json({ message: 'Movie added to watchlist', watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get user's watchlist
exports.getWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('watchlist');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Remove a movie from the user's watchlist
exports.removeFromWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.watchlist = user.watchlist.filter((id) => id.toString() !== movieId);
    await user.save();
    res.status(200).json({ message: 'Movie removed from watchlist', watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};
