// const jwt = require("jsonwebtoken");

// const jwtAuthmiddleware = (req, res, next) => {

//     //Extract the jwt token from the request headers

//     const token = req.header.authorization.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'unauthorized' })

//     try {
//         //verify the jwt token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)

//         //Attach user infomation to the request object
//         req.user = decoded;
//         next();


//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ error: 'invalid token' });

//     }
// }


// //Function to generate the token


// const generateToken = (userData) => {

//     //generate new jwt token using user data
//     return jwt.sign(userData, process.env.JWT_SECRET);
// }

// module.exports =  {jwtAuthmiddleware , generateToken};


const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    // first check request headers has authorization or not
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({ error: 'Token Not Found' });

    // Extract the jwt token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Unauthorized' });

    try{
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user information to the request object
        req.user = decoded
        next();
    }catch(err){
        console.error(err);
        res.status(401).json({ error: 'Invalid token' });
    }
}


// Function to generate JWT token
const generateToken = (userData) => {
    // Generate a new JWT token using user data
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: 30000});
}

module.exports = {jwtAuthMiddleware, generateToken};

