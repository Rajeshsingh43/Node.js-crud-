const mongoose =require("mongoose");
require('dotenv').config();

// //Define Mongodb connection Url
// const mongoURL='mongodb+srv://rajesh:1234@cluster0.homys1y.mongodb.net/hotel'


// //setUp mongodb connection
// mongoose.connect(mongoURL)
// const db=mongoose.connection;
// //define event listener for database connection

// db.on('connected',()=>{
//     console.log("connected to database connection")
// })


// db.on('error',()=>{
//     console.log(" connection is Error")
// })

// db.on('error',()=>{
//     console.log(" connection is Disconnected")
// })

// const mongoURL='mongodb+srv://rajesh:1234@cluster0.homys1y.mongodb.net/hotel'
const mongoURL=process.env.MONGO_URL

mongoose.connect(mongoURL)
.then(()=>{
    console.log("database connection is sucessfully");
})
.catch((err)=>{
    console.log("connection failed")
})


