
const express = require('express');
const fs = require('fs');
const moviesRouter = require('./Routes/MoviesRoutes')
// const { get } = require('http');
// const logger = function (req, res, next) {
//     console.log('custom middleware called');  
//     next();      
// }
let app = express();
app.use(express.json()); 
//app.use(logger); 
//const port = 3000;

//Route Handler Functions


// app.get('/api/v1/movies', getallMovies);
// app.get('/api/v1/movies/:id', getmovie);
// app.post('/api/v1/movies', postMovie)
// app.patch('/api/v1/movies/:id', patchMovie); 
// app.delete('/api/v1/movies/:id', deleteMovie)  

app.use('/api/v1/movies', moviesRouter);
module.exports = app;