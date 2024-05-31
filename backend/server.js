const express = require('express');
const app = express();
const userRoute= require('./routes/userRoute');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const cors= require('cors');
app.use(cors());

mongoose.connect("mongodb+srv://harsharyan1710:yl2vGBDJsxi9YRH1@cluster0.ce3gj.mongodb.net//crudMern", {
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

app.get('/test', (req, res) => {
    res.json({ message: "Test route working!" });
});


app.get('/db-status', (req, res) => {
    const connectionStatus = mongoose.connection.readyState;
    const statusMessage = connectionStatus === 1 ? "connected" : "not connected";
    res.json({ status: statusMessage, connectionStatus });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
