const router = require('express').Router();

const movieServices = require('../services/movieService')

router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', (req, res) => {
    const newMovie = req.body;

    movieServices.create(newMovie);

    res.redirect('/');
})

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieServices.getOne(movieId);

    res.render('details', {movie});
})

module.exports = router;