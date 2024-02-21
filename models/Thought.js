// Import the necessary modules from mongoose
const { Schema, model } = require('mongoose');

// Define the Reaction schema
const reactionSchema = new Schema(
  {
    // Unique ID for the reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Text of the reaction
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Username of the user who created the reaction
    username: {
      type: String,
      required: true,
    },
    // Timestamp of when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      // Include getters when data is requested
      getters: true,
    },
  }
);

// Define the Thought schema
const thoughtSchema = new Schema(
  {
    // Text of the thought
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // Timestamp of when the thought was created
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // Username of the user who created the thought
    username: {
      type: String,
      required: true,
    },
    // Array of reactions to the thought
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // Include virtuals when data is requested
      virtuals: true,
      // Include getters when data is requested
      getters: true,
    },
    // Prevent virtuals from creating duplicate of _id
    id: false,
  }
);

// Create the Thought model using the Thought schema
const Thought = model('Thought', thoughtSchema);

// Export the Thought model
module.exports = Thought;
