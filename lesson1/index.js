const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === '/text.txt') {
    const path = __dirname + req.url;
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        res.write('error');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.write('404 not found');
    res.end();
  }
});
server.listen(3000);
