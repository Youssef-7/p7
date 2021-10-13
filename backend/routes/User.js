const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/users');


router.post('/signup', passwordValidation, userCtrl.signup);
router.post('/login', limiter, userCtrl.login);
router.delete('/delete/:id', auth, userCtrl.deleteUser);
router.get('/users', userCtrl.getAllUser);
router.get('/user/:id', userCtrl); 
router.post('/update/:id', auth, userCtrl.modifyUser);


module.exports = router;