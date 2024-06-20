const { Router } = require('express');
const router = Router();

router.get('/genre', (req, res) => {
  res.end('GET /genre');
});
router.post('/genre', (req, res) => {
  res.end('POST /genre');
});
router.put('/genre', (req, res) => {
  res.end('PUT /genre');
});
router.delete('/genre', (req, res) => {
  res.end('DELETE /genre');
});

module.exports = router;
