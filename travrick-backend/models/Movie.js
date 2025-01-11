const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    genre: { type: String, required: true },
    thumbnail: { type: String, required: true },
    videoUrl: { type: String, required: true },
    releaseDate: { type: Date },
    ratings: { type: Number, default: 0 },
    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who watched this movie
    watchingFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Currently watching
  });
  

module.exports = mongoose.model('Movie', MovieSchema);
