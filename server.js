const express=require("express");
const app=express();
const db=require('./db');
const passport=require('./Auth');
require('dotenv').config();






const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000

//Middleware Function
// const logRequest=(req,res,next)=>{
//     console.log(`[${new Date().toLocaleString()}] Request Mode to: ${originalUrl}`);
//     next();

// }
// app.use(logRequest);




app.use(passport.initialize());

const localAuthmiddleware=passport.authenticate('local' , {session: false});
app.get('/', function (req,res) {
    res.send("welcome to my hotel")
})
    
   const personRoutes=require('./routes/personRoutes') 
   app.use('/person' ,personRoutes);


   const menuItemroutes=require('./routes/menuItemroutes');
   app.use('/menu',  menuItemroutes);

//    const loginRoutes=require('./routes/loginRoutes');
//    app.use('/login',  loginRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})



// {
//     "name":"deepak singh",
//     "age":28,
//     "work":"chef",
//     "mobile":"12345678",
//     "email":"alice@gmail.com",
//     "address":"123 Main st, City",
//     "salary":6000
//     }




