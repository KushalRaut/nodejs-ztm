const express = require('express');
const friendsController = require('../controller/friends.controller');

const friendsRouter = express.Router();

friendsRouter.get('/', friendsController.getFriends);
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/:friendID', friendsController.getFriendById);

module.exports = friendsRouter;
