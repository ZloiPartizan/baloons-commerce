const mongoose = require('mongoose')

require("dotenv").config()

const productSchema = new mongoose.Schema({
    title: {type: String, required: true, },
    desc: {type: String, required: true,},
    img: {type: String, required: true,},
    color: {type: String, },
    size: {type: String, },
    price: {type: Number, required: true,},

}, {timestamps: true}
)

const Product = mongoose.model("Product", productSchema)

exports.Product = Product
