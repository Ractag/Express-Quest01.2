const database = require("../../database");

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const users = [
  {
    id: 1,
    firstName: "Victor",
    lastName: "Garcia",
  },
  {
    id: 2,
    firstName: "Dimitri",
    lastName: "Dieu",
  },
  {
    id: 3,
    firstName: "Jésus",
    lastName: "Enfant-de-Dimitri",
  },
];

const getMovies = (req, res) => {
  res.json(movies);
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send("Not Found");
  }
};

const getUsers = (req, res) => {
  if (users != null) {
    res.json(users);
  } else {
    res.status(404).send("Not Found");
  }
};

const getUserId = (req, res) => {
  const id = parseInt(req.params.id);
  const userId = users.find((element) => element.id === id);

  if (userId != null) {
    res.json(userId);
  } else {
    res.status(404).send("Not Found");
  }
};

const postMovie = (req, res) => {
  const { title, director, year, color, duration } = req.body;

  database
    .query(
      "INSERT INTO movies(title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)",
      [title, director, year, color, duration]
    )
    .then(([result]) => {
      res
        .status(201)
        .send({ id: result.insertId, title, director, year, color, duration });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postUser = (req, res) => {
  const { firstname, lastname, email } = req.body;

  database
    .query("INSERT INTO users(firstname, lastname, email) VALUES (?, ?, ?)", [
      firstname,
      lastname,
      email,
    ])
    .then(([result]) => {
      res.status(201).send({ id: result.insertId, firstname, lastname, email });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUserId,
  postMovie,
  postUser,
};
