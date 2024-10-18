const express = require("express");

const port = 8000;

const app = express();

const db = require("./config/mongoose");



const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());




app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/admin', require("./routes/adminRoutes"));
app.use('/api/habits', require("./routes/habitRoutes"));
app.use('/api/notifications', require("./routes/notificationRoutes"));


app.listen(port, ()=> console.log("server is running on "+ port))