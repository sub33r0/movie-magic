const router = require('express').Router();

const movieServices = require('../services/movieService')

router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', async (req, res) => {
    const newMovie = req.body;

    try {
        
        await movieServices.create(newMovie);

        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/create');
    }
})

router.get('/movies/:movieId',async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieServices.getOne(movieId).lean();

    movie.ratingStars = '&#x2605;'.repeat(movie.rating);

    res.render('details', { movie });
})

router.get('/movies/:movieId/attach', (req, res) => {
    res.render('movie/attach');
})

module.exports = router;