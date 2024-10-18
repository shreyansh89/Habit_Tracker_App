const mongoose = require('mongoose');

const habitTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
});

const  habitTemplate = mongoose.model('HabitTemplate', habitTemplateSchema);
module.exports = habitTemplate;