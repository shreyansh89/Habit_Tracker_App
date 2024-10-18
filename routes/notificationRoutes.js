const express = require('express');

const router = express.Router();

const notificationController = require('../controllers/notificationController');

const { protect } = require('../middleware/authMiddleware');





router.post('/send-reminders', protect, notificationController.sendHabitReminders);



module.exports = router;
