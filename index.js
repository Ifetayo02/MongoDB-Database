const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
const Users=[]
const port = process.env.port ;
const mongoDB_URI = process.env.mongo_URI;
mongoose.connect(mongoDB_URI )
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/', (req, res) => {
    res.render('signUp');
});
const usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
const User = mongoose.model('User', usersSchema);
app.post('/register', (req, res) => {
    try{
        const newUser= new User(req.body);
        newUser.save()
            console.log("User saved:",User);
            res.send('You have been registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});