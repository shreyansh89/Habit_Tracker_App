const User = require('../models/user');
const Habit = require('../models/habit');
const HabitTemplate = require('../models/habitTemplate');

// Get all users with their habit stats
module.exports.getAllUsersWithStats = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        const userStats = await Promise.all(users.map(async (user) => {
        const habits = await Habit.find({ user: user._id });
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            habits: habits.map(habit => ({
            name: habit.name,
            streak: habit.streak,
            lastCompleted: habit.lastCompleted,
            progressCount: habit.progress.length,
            })),
        };
        }));
        res.json(userStats);
  } 
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create habit template
module.exports.createHabitTemplate = async (req, res) => {
    const { name, frequency, description } = req.body;
    try {
        const habitTemplate = new HabitTemplate({ name, frequency, description });
        await habitTemplate.save();
        res.status(201).json(habitTemplate);
    } 
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};