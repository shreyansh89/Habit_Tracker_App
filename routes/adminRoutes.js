const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

const { protect, admin } = require('../middleware/authMiddleware');





router.get('/users', protect, admin, adminController.getAllUsersWithStats);
router.post('/habit-templates', protect, admin, adminController.createHabitTemplate);


module.exports = router;
