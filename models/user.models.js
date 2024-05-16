/* 
    Pseudo code for userModel:
        fullname : string
        email : string
        password: string
        cart: array
        isadmin: boolean
        orders : array
        contact: number
        picture: string
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom');


const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
});

module.exports =  mongoose.model('User', userSchema);