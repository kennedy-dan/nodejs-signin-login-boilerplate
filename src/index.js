const express = require('express')
const env = require('dotenv')
const mongoose = require("mongoose");

const app = express()


const userRoute = require('./routes/user')
const adminRoute = require('./routes/admin/user')

//mongoose connection
mongoose.connect("mongodb://localhost:27017/crime-report", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
    console.log('database connected');
});

env.config()

app.use(express.json())

app.use('/api', userRoute)
app.use('/api', adminRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})