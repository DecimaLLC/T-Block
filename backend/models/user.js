// const mongoose = require('mongoose');

// const {Schema} = mongoose;

// const userSchema = new Schema({
//     name : {type : String, required : true},
//     username: {type : String, required : true},
//     email : {type : String, required : true},
//     password : {type : String, required : true}

// },
//     {timestamps:true}
// );
// // 1st argument User is for model import
// // 2nd argument userSchema is how our model should look like
// // 3rd argument users is for database connection

// module.exports = mongoose.model('User',userSchema,'users');


const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
},
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema, 'users');