// Import the necessary modules from mongoose
const { Schema, model } = require('mongoose');
// Import validator to validate the email field
const validator = require('validator');

// Define the User schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, // This field must be unique
    required: true, // This field is required
    trim: true, // This will remove any whitespace before and after the input
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Validate the email using the validator.isEmail function
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  // The thoughts field is an array of ObjectIds referencing the Thought model
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  // The friends field is an array of ObjectIds referencing the User model (self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// Define a virtual field 'friendCount' that returns the length of the friends array
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model using the User schema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
