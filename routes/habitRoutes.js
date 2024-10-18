const express = require('express');

const router = express.Router();

const habitController = require('../controllers/habitController');

const { protect } = require('../middleware/authMiddleware');





router.post("/createHabit" , protect, habitController.createHabit);      
router.get("/getUserHabits" , protect, habitController.getUserHabits);    
router.put('/updateHabit/:habitId' , protect, habitController.updateHabit);     
router.delete('/deleteHabit/:habitId' , protect, habitController.deleteHabit);     

// Adopt a habit template
router.post('/templates/:templateId/adopt', protect, habitController.adoptHabitTemplate); 



module.exports = router;