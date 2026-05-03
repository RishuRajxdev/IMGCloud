const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Conencted to DB")
}
module.exports= connectDB