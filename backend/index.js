const express = require('express');
const cors = require('cors');
const userRouter = require('./router/userRouter');
const { connections } = require('./config/db.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use("/user", userRouter);


app.listen(process.env.PORT, async () => {
    try {
        await connections
        console.log("Connected to DB")
    } catch (error) {
        console.log('error:', error);
    }
    console.log("Server listening");
});