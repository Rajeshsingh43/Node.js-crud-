const express=require("express")
const router=express.Router();
const MenuItem = require("./../models/MenuItem");

router.post('/',async(req,res)=>{
    try {
        const data=req.body //Asuming the request body contains the person data
    
        //create a person document using the mongoose model
        const newMenuItem=new MenuItem(data);
    
        //save the new person to the database
        const response=await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    
    
        
    } catch (error) {
        console.log("error")
        res.status(500).json({error:'internal server Error'});
        
    }
    })


    router.get('/', async (req,res)=>{
        try {
            const data=await MenuItem.find();
            console.log('data fetched');
            res.status(200).json(data);
    
            
        } catch (error) {
            console.log("error")
        res.status(500).json({error:'internal server Error'});
            
        }
    })

    module.exports=router;