const database = require("../../database");

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

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, email } = req.body;

  database
    .query(
      "update users set firstname = ?, lastname = ?, email = ? where id = ?",
      [firstname, lastname, email, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(422);
    });
};

module.exports = {
  getUsers,
  getUserId,
  postUser,
  updateUser,
};
