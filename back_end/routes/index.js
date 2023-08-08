var express = require('express');
var router = express.Router();
const Movie = require('../Models/movieInfo')

/* GET home page. */
router.get('/moviesList', async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var response = await Movie.find({}, { _id: 1, movieName: 1 ,url:1})
  // console.log('kkkkkkkk',response)
  res.send(response)
  res.end()
});
router.get('/movieData/:id',async  function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var response = await Movie.findOne({ _id: req.params.id })
  res.send(response)
  res.end()
});

module.exports = router;
