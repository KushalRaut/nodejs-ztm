const express = require('express');
const messagesController = require('../controller/messages.controller');

const messageRouter = express.Router();

messageRouter.get('/', messagesController.getMessage);
messageRouter.post('/', messagesController.postMessage);

module.exports = messageRouter;
