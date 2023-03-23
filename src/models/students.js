const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 2
    },
    email:{
        type: String,
        required: true,
        unique: [true, "email id already registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        }
    },
    phone:{
        type: Number,
        min: 10, 
        // max: 10,
        required: true,
    },
    address:{
        type: String,
        required: true
    }
})

const student = new mongoose.model('Student', studentSchema);

module.exports = student;