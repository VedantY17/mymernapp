const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://vedantny:devil45@cluster0.fj9ayso.mongodb.net/mymernproject?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () =>{
    await mongoose.connect(mongoURI);
        console.log("connected")
    };

module.exports = mongoDB