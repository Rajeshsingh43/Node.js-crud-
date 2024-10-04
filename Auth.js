const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/person')


passport.use(new LocalStrategy(async (USERNAME, password,done)=>{
    //authentication logic here
    try {
        //console.log('Received credentials:' ,USERNAME,password);
        const user= await Person.findOne({username:USERNAME});
        if(!user){
            return done(null, false, {message:'incorrect username.'})
        }
        const isPasswordMatch=await user.ComparePassword(password);
        if(isPasswordMatch){
            return done(null, user);
        }else{
            return done(null, false ,{message: 'incorrect password.'})
        }
        
    } catch (error) {
        return done(err)
        
    }
}));
module.exports=passport; //Export Configured passport