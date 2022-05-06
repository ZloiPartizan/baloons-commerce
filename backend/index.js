const express = require('express')
const mongoose = require('mongoose')


require ('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to our todos api')
})

// const connection_string = process.env.CONNECTION_STRING process.env.PORT ||
const port = 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

// mongoose.connect(connection_string, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
//     .then(() => console.log('MongoDB connection established...'))
//     .catch((error) => console.error('MongoDB connection failed:', error.message))
