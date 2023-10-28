const express = require('express');
const router = express.Router();
const profileController = require('../Controller/profile');

router.post('/profile', profileController.createProfile);
router.post('/update-profile', profileController.updateProfile);


module.exports = router;