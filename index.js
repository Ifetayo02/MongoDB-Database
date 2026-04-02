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
const userRoute=require('./routes/user.route');
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


app.use('/user', userRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});