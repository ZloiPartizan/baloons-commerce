const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const signUpRoute = require('./routes/signUp')
const signInRoute = require('./routes/signIn')
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

require ('dotenv').config()

const app = express()

app.use(cors());
app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/signup', signUpRoute)
app.use('/api/signin', signInRoute)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

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
