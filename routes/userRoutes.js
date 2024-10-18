const express = require('express');

const router = express.Router();


const authcontroller = require('../controllers/userController')


router.post('/register', authcontroller.registerUser);
router.post('/login', authcontroller.loginUser);


module.exports = router;