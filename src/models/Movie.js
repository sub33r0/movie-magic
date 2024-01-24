const mongoose = require('mongoose');

const movieScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2030
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
});

const Movie = mongoose.model('Movie', movieScheme);

module.exports = Movie;