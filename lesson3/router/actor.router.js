const { Router } = require('express');
const router = Router();

const actors = [
  { id: 1, name: 'DiCaprio' },
  { id: 2, name: 'Schwarzenegger' },
  { id: 3, name: 'McConaughey' },
];

router.get('/actor', (req, res) => {
  res.json(actors);
});
router.post('/actor', (req, res) => {
  const newActor = {
    id: actors.length ? Math.max(...actors.map((actor) => actor.id)) + 1 : 1,
    name: 'De Niro',
  };
  actors.push(newActor);
  res.json(actors);
});
router.put('/actor', (req, res) => {
  actors[0] = { id: 1, name: 'Al Pacino' };
  res.json(actors);
});
router.delete('/actor', (req, res) => {
  if (actors.length) {
    actors.pop();
  }
  res.json(actors);
});

module.exports = router;
