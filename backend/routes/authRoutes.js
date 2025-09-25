const express =  require('express')
const {resgisterUser,loginUser,logoutUser,getUserPorfile} = require("../controllers/authController")

const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/register',resgisterUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser);
router.get('/profile',protect,getUserPorfile);

module.exports=router