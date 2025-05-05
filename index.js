const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8000

// init app
app.use(express.json())

// set view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/todolistStudentsDB')
    .then(() => console.log("mongodb connected successfully"))
    .catch(err => console.log(err.message))

// init schema student
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: String,
    address: String,
    phone: String
})

// init model student
const studentsModel = mongoose.model("students", studentSchema);

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})