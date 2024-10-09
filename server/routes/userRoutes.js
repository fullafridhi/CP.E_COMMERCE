
const router = require('express').Router();

const{register,login,getUserData,getProduct,createOrder,getUserOrders} = require('../controllers/userController')
const{authmiddleware} = require('../middleware/authMiddleware')
const {check} =require('express-validator')


router.post('/register',[check('email', 'email is not valide ').isEmail(),check('password','your password is not valide').isStrongPassword({minLength:6,minLowercase:1,minNumber:1,minUppercase:1,minSymbols:1}) ],register)

router.post('/login',login)
router.get('/',authmiddleware,getUserData)
router.get('/getproducts',getProduct)
router.post('/createorder',authmiddleware,createOrder)
router.get('/getuserorders',authmiddleware,getUserOrders)

module.exports = router; 