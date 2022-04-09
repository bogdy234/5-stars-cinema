const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  description: String,
  length: Number,
  isRunning: Boolean,
  coverImageUrl: String,
  trailerUrl: String,
  //TODO: put restriction to be from 1-10 rating.
  rating: Number,
  genre: String,
  productionYear: Number,
  producer: String,
  direction: String,
  actors: String,
  is3D: Boolean,
  isPremiere: Boolean,
  runningTimes: [Date],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
