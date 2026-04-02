const express=require('express');
const router=express.Router();
const {getSignUp,postSignUp,getSignin,postSignin,getDashboard}=require('../controllers/user.controller');
router.get('/signup',getSignUp);
router.post('/register',postSignUp);
router.get('/signIn',getSignin);
router.post('/login',postSignin);
router.get('/dashboard',getDashboard);
module.exports=router;