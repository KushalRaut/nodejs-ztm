const model = require('../model/friends.model');

function getFriends(req, res) {
  res.send(model);
}

function postFriend(req, res) {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({
      error: 'No Name Found',
    });
  }

  const friend = {
    name: name,
    id: model.length,
  };

  model.push(friend);
  res.status(201).json(friend);
}

function getFriendById(req, res) {
  const friendID = Number(req.params.friendID);
  const friend = model[friendID];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
}

module.exports = {
  getFriends,
  postFriend,
  getFriendById,
};
