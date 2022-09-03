const path = require('path');

function getMessage(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
}

function postMessage(req, res) {
  res.send(`received data ${JSON.stringify(req.body)}`);
}

module.exports = {
  getMessage,
  postMessage,
};
