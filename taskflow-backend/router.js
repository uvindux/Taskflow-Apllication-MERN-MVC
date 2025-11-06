const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {model} =require('mongoose');

router.get ('/users',controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/updateuser',controller.UpdateUser);
router.post('/deleteuser',controller.UserDelete);
module.exports = router;