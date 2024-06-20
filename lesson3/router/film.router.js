const { Router } = require('express');
const router = Router();

const films = [
  { id: 1, name: 'Harry Potter', year: 2000 },
  { id: 2, name: 'Spider man', year: 2003 },
  { id: 3, name: 'Green elephant', year: 1999 },
];

router.get('/film', (req, res) => {
  res.json(films);
});
router.post('/film', (req, res) => {
  const newFilm = {
    id: films.length ? Math.max(...films.map((film) => film.id)) + 1 : 1,
    name: 'Lord of rings',
    year: 2001,
  };
  films.push(newFilm);
  res.json(films);
});
router.put('/film', (req, res) => {
  films[1] = { id: 2, name: 'Spider man 2', year: 2004 };
  res.json(films);
});
router.delete('/film', (req, res) => {
  if (films.length) {
    films.pop();
  }
  res.json(films);
});

module.exports = router;
