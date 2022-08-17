const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String, required: true
    },
    email:{
        type: String, required: true
    },
    balance:{
        type: String, required: false
    },
    date:{
        type: String, required: false
    }
})

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;