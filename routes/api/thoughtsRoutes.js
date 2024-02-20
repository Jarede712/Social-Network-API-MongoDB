// Import necessary modules from express
const router = require('express').Router();

// Import controller functions from thoughts controller
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Set up GET all and POST routes (/api/thoughts)
router.route('/').get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE routes (/api/thoughts/:id)
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST route (/api/thoughts/:thoughtId/reactions)
router.route('/:thoughtId/reactions').post(addReaction);

// Set up DELETE route (/api/thoughts/:thoughtId/reactions/:reactionId)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
