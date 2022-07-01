const mongoose = require('mongoose')

const User = require('./models/User')

mongoose.connect('mongodb://127.0.0.1/my_test_database');

User.create({
    username: 'baranmengck',
    email: 'mengucekbaran@gmail.com',
    password: '123'
},(error,post)=>{
    console.log(error,post);
})