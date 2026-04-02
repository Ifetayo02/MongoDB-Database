const User=require('../models/user.model');

const postSignUp= async (req, res) => {
    try{
        const newUser= new User(req.body);
        await newUser.save();
        console.log("User saved:", newUser);
        res.redirect('/user/signIn');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
};
const getSignUp=(req, res) => {
    res.render('signUp');
};
const getSignin=(req, res) => {
    res.render('signIn');
};
const getDashboard=(req,res) => {
    res.render('Dashboard')
};
const postSignin=(req,res)=>{
    const{email,password}=req.body;
    User.findOne({email})
    .then((foundUser)=>{
        if (!foundUser) {
            console.log('Invalid email');
            return res.status(400).json({message:"Invalid email or password"})
        }
      
        console.log('Login successful:',foundUser.email);
        res.redirect('/user/dashboard');
    })
    .catch((error)=>{
        console.error('Error during login:',error);
        res.status(500).json({message:"Error during login"})
    }
        )
}
module.exports={getSignUp,postSignUp,getSignin,postSignin,getDashboard}