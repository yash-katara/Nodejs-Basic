const fs = require("fs");
const express = require("express");

let movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const movies = JSON.parse(data);
        console.log(movies);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
}));

exports.getallMovies = (req,res)=>{
    
    res.status(200).json({
        status: 'success',
        data: {
            movies: movies
        }
    });
}

exports.getmovie = (req,res)=>{
    log('Request params:', req.params);
  
   // const movieId = parseInt(req.params.id, 10); convert string to number
   const movieId = req.params.id *1; // Convert the ID to a number
    const movie = movies.find(m => m.id === movieId);
    if (!movie) {
        return res.status(404).json({
            status: 'error',
            message: 'Movie not found'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            movie: movie
        }
    });
}

exports.postMovie = (req,res)=>{
    
    const newMovie = req.body;
    console.log('request body:', req.body);
    const newId = movies[movies.length - 1].id + 1;
 console.log('request body:', newId);
    newMovie.id = newId;
    movies.push(newMovie);
   fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({
                status: 'error',
                message: 'Could not save movie'
            });
        }
    });
    console.log('New movie added:', newMovie); 
    
    res.status(201).json({
        status: 'success',
        data: {
            movie: newMovie
        }
    });
}

exports.patchMovie = (req,res)=>{
    const movieId = req.params.id * 1; // Convert the ID to a number
    const movieIndex = movies.findIndex(m => m.id === movieId);
    if (movieIndex === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Movie not found'
        });
    }
    const updatedMovie = { ...movies[movieIndex], ...req.body };
    console.log('Updated movie:', updatedMovie);
    
    movies[movieIndex] = updatedMovie;
    
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({
                status: 'error',
                message: 'Could not update movie'
            });
        }
    });
    
    res.status(200).json({
        status: 'success',
        data: {
            movie: updatedMovie
        }
    });
}

exports.deleteMovie =  (req,res)=>{
    const movieId = req.params.id * 1; // Convert the ID to a number
    const movieIndex = movies.findIndex(m => m.id === movieId);
    if (movieIndex === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'Movie not found'
        });
    }
    movies.splice(movieIndex, 1);
    
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).json({
                status: 'error',
                message: 'Could not delete movie'
            });
        }
    });
    
    res.status(204).json({
        status: 'success',
        data: null
    });
}