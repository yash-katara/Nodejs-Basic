const express = require("express");
const moviesController = require("./../Controllers/moviesControer");
const { getallMovies, getmovie, postMovie, patchMovie, deleteMovie } = moviesController;



const router = express.Router();
//const moviesRouter = express.Router();

router.route("/")
    .get(moviesController.getallMovies)
    .post(moviesController.postMovie);

router.route("/:id")
    .get(moviesController.getmovie)
    .patch(moviesController.patchMovie)
    .delete(moviesController.deleteMovie);

    module.exports = router;
