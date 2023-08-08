const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  cast: [
    {
      type: String
    }
  ],
  releasedYear: {
    type: Number,
    required: true
  },
  boxOffice: {
    type: String,
    required: true
  },
  imdbRating: {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model('RajiniMovies', movieSchema,'RajiniMovies');

module.exports = Movie;