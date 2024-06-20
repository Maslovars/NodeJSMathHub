const { Router } = require('express');
const router = Router();

router.get('/score', (req, res) => {
  res.end('GET /score');
});
router.post('/score', (req, res) => {
  res.end('POST /score');
});
router.put('/score', (req, res) => {
  res.end('PUT /score');
});
router.delete('/score', (req, res) => {
  res.end('DELETE /score');
});

module.exports = router;
