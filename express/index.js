const express = require('express');
const friendsRouter = require('./routes/friends.routes');
const messageRouter = require('./routes/messages.routes');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

app.use('/friends', friendsRouter);

app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
