// const { Timestamp } = require('mongodb');
// const mongoose = require('mongoose');

// const {Schema} = mongoose;

// const refreshTokenSchema = Schema({
//     token: {type: String, required: true},
//     userId: {type: mongoose.Schema.ObjectId, ref:'User'}
// },
//     {timestamp:true}

// );

// module.exports = mongoose.model('RefreshToken',refreshTokenSchema,'tokens');

const mongoose = require('mongoose');

const {Schema} = mongoose;

const refreshTokenSchema = Schema({
    token: {type: String, required: true},
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
{timestamps: true}

);

module.exports = mongoose.model('RefreshToken', refreshTokenSchema, 'tokens');