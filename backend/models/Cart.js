const mongoose = require('mongoose')

require('dotenv').config()

const cartSchema = new mongoose.Schema({
    userId: {type: String, required: true, },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Namber,
                default: 1,
            }
        }
    ],
}, {timestamps: true}
)

const Cart = mongoose.model("User", cartSchema)

exports.Cart = Cart
