const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    imagesName: {
        type: [String],  
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        index: true 
    },
 
    created: {
        type: Date,
        default: Date.now,
        index: true 
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };
