const router = require('express').Router();

const movieServices = require('../services/movieService')

router.get('/', (req, res) => {
    const movies = movieServices.getAll();
    res.render('home', {movies});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    const movies = movieServices.getAll();
    res.render('search', {movies})
})

router.get('/404', (req, res) => {
    res.render('404')
});

module.exports = router;