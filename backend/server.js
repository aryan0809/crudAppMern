const express = require('express');
const app = express();
const userRoute= require('./routes/userRoute');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const cors= require('cors');
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crudMern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB connected successfully");
})
.catch((error) => {
    console.log("error", error);
});

app.use(express.json());

// Create Routes
app.use('/user',userRoute);




app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
