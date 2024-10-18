const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
  lastCompleted: {
    type: Date,
  },
  frequency: {
    type: Number,
    required: true,
  },
  progress: [{
    date: {
      type: Date,
      default: Date.now,
    },
  }],
});

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;