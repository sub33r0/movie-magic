const router = require('express').Router();

const movieServices = require('../services/movieService')

router.get('/create', (req, res) => {
    res.render('create')
});
router.post('/create', (req, res) => {
    const newMovie = req.body;

    movieServices.create(newMovie);

    res.send(req.body)
})

module.exports = router;