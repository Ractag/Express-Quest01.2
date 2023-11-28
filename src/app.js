const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.APP_PORT;

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies/", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users/", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserId);
app.post("/api/movies/", movieControllers.postMovie);
app.post("/api/users/", userControllers.postUser);
app.put("/api/movies/:id", movieControllers.updateMovie);
app.put("/api/users/:id", userControllers.updateUser);

module.exports = app;
