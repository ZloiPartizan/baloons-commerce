const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const signUpRoute = require('./routes/signUp')
const signInRoute = require('./routes/signIn')

require ('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/signup', signUpRoute)
app.use('/api/signin', signInRoute)

app.get('/', (req, res) => {
    res.send('Welcome to our todos api')
})

const connection_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

mongoose.connect(connection_string)
     .then(() => console.log('MongoDB connection established...'))
     .catch((error) => console.error('MongoDB connection failed:', error.message))
