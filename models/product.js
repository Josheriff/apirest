'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const ProductSchema = Schema ({
    name: String,
    picture: String,
    price : {type:Number, default:0},
    category : { type: String, enum: ['computers', 'phones', 'accesories']},
    description : String
});

//my intencion is to migrate to firebase so sorry if i dont explain a lot.
mongoose.model('Product', ProductSchema);