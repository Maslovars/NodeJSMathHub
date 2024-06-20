const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const sayMyNameQuery = (req, res, next) => {
  console.log(
    `My name is ${req.query.name}. My lastname is ${req.query.lastname}. I'm ${req.query.age} years old`,
  );
  next();
};
const sayMyNameBody = (req, res, next) => {
  console.log(
    `My name is ${req.body.name}. My lastname is ${req.body.lastname}. I'm ${req.body.age} years old`,
  );
  next();
};

app.get('/', sayMyNameQuery, (req, res) => {
  res.end(
    `My name is ${req.query.name}. My lastname is ${req.query.lastname}. I'm ${req.query.age} years old`,
  );
});
app.post('/', sayMyNameBody, (req, res) => {
  res.end(
    `My name is ${req.body.name}. My lastname is ${req.body.lastname}. I'm ${req.body.age} years old`,
  );
});

app.listen(3000);
