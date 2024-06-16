const express = require('express');

const app = express();

app.get('/products', (req, res) => {
  res.end('GET request to /products was completed successfully!');
});
app.post('/products', (req, res) => {
  res.end('POST request to /products was completed successfully!');
});
app.put('/products', (req, res) => {
  res.end('PUT request to /products was completed successfully!');
});
app.delete('/products', (req, res) => {
  res.end('DELETE request to /products was completed successfully!');
});

app.listen(3000);
