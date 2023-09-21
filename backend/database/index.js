const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index')

// const connectionString = "mongodb+srv://zeeshanjaved:Decima123@cluster0.jkwl0co.mongodb.net/test?retryWrites=true&w=majority";

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Database connected to host: ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error : ${error}`);
    }    

}

module.exports = dbConnect;