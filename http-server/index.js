const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friendsList = [
  {
    id: 1,
    name: 'Lionel Messi',
  },
  {
    id: 2,
    name: 'Thiago Messi',
  },
  {
    id: 3,
    name: 'Matteo Messi',
  },
  {
    id: 4,
    name: 'Mikel Messi',
  },
];

server.on('request', (req, res) => {
  const items = req.url.split('/');
  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const reqObj = data.toString();
      console.log(reqObj);
      friendsList.push(JSON.parse(reqObj));
    });
  } else if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      const resObj = friendsList[Number(items[2] - 1)];
      res.end(JSON.stringify({ resObj }));
    } else {
      res.end(JSON.stringify({ friendsList }));
    }
  } else if (items[1] === 'messages') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul><li>Lionel Messi</li><li>Andres Iniesta</li></ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
