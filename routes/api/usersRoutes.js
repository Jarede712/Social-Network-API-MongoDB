// Import necessary modules from express
const router = require('express').Router();

// Import controller functions from user controller
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Set up GET and POST routes (/api/users)
router.route('/').get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE routes (/api/users/:id)
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST and DELETE routes (/api/users/:userId/friends/:friendId)
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
