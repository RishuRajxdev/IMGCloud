require("./node_modules/dotenv").config();
const app = require('../backend/src/app.js'); 
const connectDB = require('./src/db/db.js')
connectDB();
const Port = 3001;
app.listen(Port,()=>{
    console.log(`Example port listening on ${Port}`)
})