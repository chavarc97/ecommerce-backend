const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter product name']
    },
    description: {
        type: String,
        required: [true, 'Enter product description']
    },
    price: {
        type: Number,
        required: [true, 'Enter product price'],
        default: 0
    },
    imageUrl: {
        type: String,
        required: [true, 'Enter product image']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)