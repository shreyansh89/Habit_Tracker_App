const Habit = require('../models/habit');
const HabitTemplate = require('../models/habitTemplate');

// Create a new habit
module.exports.createHabit = async (req, res) => {
  const { name, frequency } = req.body;
  try {
    const habit = new Habit({
      user: req.user.id,
      name,
      frequency,
    });
    await habit.save();
    res.status(201).json(habit);
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all habits for a user
module.exports.getUserHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.json(habits);
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update 
module.exports.updateHabit = async (req, res) => {
  const { habitId } = req.params;
  const updates = req.body;

  try {
    const habit = await Habit.findByIdAndUpdate(habitId, updates, { new: true });
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }
    res.json(habit);
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete 
module.exports.deleteHabit = async (req, res) => {
  const { habitId } = req.params;
  try {
    await Habit.findByIdAndDelete(habitId);
    res.status(204).send(); 
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Adopt a habit template
module.exports.adoptHabitTemplate = async (req, res) => {
  try {
    const template = await HabitTemplate.findById(req.params.templateId);
    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    const habit = new Habit({
      user: req.user.id,
      name: template.name,
      frequency: template.frequency,
    });

    await habit.save();
    res.status(201).json(habit);
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};