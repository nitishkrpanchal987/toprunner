const mongoose = require('mongoose');

let connection = async ()=>{
    try{
        let result = await mongoose.connect('mongodb://127.0.0.1:27017/students-api');

        console.log('connected with database')
    }
    catch(err){
        console.log('no connection');
    }
}
connection();