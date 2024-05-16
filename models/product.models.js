/* 
    Pseudo code for product schema:
        image : string
        name: string
        price: number
        discount: number
        bgcolor: string
        panelcolor: string
        textcolor: string
*/


const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});

module.exports = mongoose.model('Product', productSchema);