const { Router } = require('express');
const router = Router();

router.get('/director', (req, res) => {
  res.end('GET /director');
});
router.post('/director', (req, res) => {
  res.end('POST /director');
});
router.put('/director', (req, res) => {
  res.end('PUT /director');
});
router.delete('/director', (req, res) => {
  res.end('DELETE /director');
});

module.exports = router;
