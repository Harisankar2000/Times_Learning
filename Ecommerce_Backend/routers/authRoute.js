const { registerController , loginController , testController} = require('../controllers/authController');
const {requireSignIn ,isAdmin} = require('../middlewares/authMiddleware');
const express = require('express');
const router = express.Router();
if (!requireSignIn){
    res.tatus(400).send({
        message: "Unauthorized"
    })
}
router.post('/register', registerController);
router.post('/login', requireSignIn,loginController);
router.get("/test",requireSignIn, testController)

module.exports = router;
