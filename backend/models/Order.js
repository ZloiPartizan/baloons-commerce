const mongoose = require('mongoose')

require('dotenv').config()

const orderSchema = new mongoose.Schema({
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
    amount: {type: Number, required: true, },
    address: {type: Object, required: true, },
    status: {type: String, default: "pending", },
    }, {timestamps: true}
)

const Order = mongoose.model("Order", orderSchema)

exports.Order = Order
