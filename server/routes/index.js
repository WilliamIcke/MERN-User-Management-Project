const express = require("express");
const userController = require("../controllers/userController");
const membershipController = require("../controllers/membershipController");
const router = express.Router();

router.get('/user/', userController.getUserRecords);
router.put('/user/:id', userController.updateUserRecord);

router.get('/membership/', membershipController.getMembershipRecords);

module.exports = router;