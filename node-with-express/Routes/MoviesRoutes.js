const express = require("express");
const moviesController = require("./../Controllers/moviesControer");
const { getallMovies, getmovie, postMovie, patchMovie, deleteMovie } = moviesController;



const router = express.Router();
//const moviesRouter = express.Router();

router.param('id',(req,res,next,value) =>{
    console.log('Movie id is' + value);
    next(); 
    }

  
); 

router.route("/")
    .get(moviesController.getallMovies)
    .post(moviesController.postMovie);

router.route("/:id")
    .get(moviesController.getmovie)
    .patch(moviesController.patchMovie)
    .delete(moviesController.deleteMovie);

    module.exports = router;
