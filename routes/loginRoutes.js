const express=require("express")
const router=express.Router();
const login=require('./../models/login')

//post route to add Person
router.post('/',async(req,res)=>{
    try {
        const data=req.body //Asuming the request body contains the person data
    
        //create a person document using the mongoose model
        const newlogin=new login(data);
    
        //save the new person to the database
        const response=await newlogin.save();
        console.log('data saved');
        res.status(200).json(response);
    
    
        
    } catch (error) {
        console.log("error")
        res.status(500).json({error:'internal server Error'});
        
    }
    })
    