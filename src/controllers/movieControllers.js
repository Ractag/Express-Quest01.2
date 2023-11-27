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

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUserId,
};
