const nodemailer = require('nodemailer');
const Habit = require('../models/habit');
const User = require('../models/user');

// Create a Nodemailer transporter
module.exports.transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send reminders to all users
module.exports.sendHabitReminders = async () => {
  try {
    const users = await User.find({ notificationEnabled: true });

    for (const user of users) {
      const habits = await Habit.find({ user: user._id });

      const pendingHabits = habits.filter(habit => {
        const lastCompletedDate = habit.lastCompleted ? new Date(habit.lastCompleted) : null;
        const today = new Date();
        
        return !lastCompletedDate || lastCompletedDate.toDateString() !== today.toDateString();
      });

      if (pendingHabits.length > 0) {
        const habitNames = pendingHabits.map(habit => habit.name).join(', ');

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: user.email,
          subject: 'Habit Reminder',
          text: `Don't forget to complete your habits: ${habitNames}`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Reminder sent to ${user.email}`);
      }
    }
  } catch (error) {
    console.error('Error sending reminders:', error.message);
  }
};