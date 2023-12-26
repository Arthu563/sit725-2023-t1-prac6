const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

// Define routes
router.get('/', homeController.homePage);
router.get('/users', userController.getAllUsers);

module.exports = router;
