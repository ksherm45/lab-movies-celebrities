
const router = require('express').Router();

const MovieModel = require('../models/Movie.model')

const CelebrityModel = require('../models/Celebrity.model')

router.get('/movies/create', (req, res, next) => {

    CelebrityModel.find()
    .then((response) => {

        res.render('./movies/new-movie.hbs', {response})

    .catch((error) => {

        next(err)

    })
    })

   
});

router.post('/movies/create', (req, res, next) => {
    console.log(req.body)

    MovieModel.create(req.body)
    .then(() => {
res.redirect('/movies')
    })

    .catch(() => {
        res.render('./movies/new-movie.hbs')
    })
});


module.exports = router