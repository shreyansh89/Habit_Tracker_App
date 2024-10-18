const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Habit_Tracker");

const db = mongoose.connection;

db.once('open', (e)=>{
    if(e) console.log("db not connected");
    console.log("db connected");
})

module.exports = db;