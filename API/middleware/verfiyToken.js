const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


exports.verifyUserToken = async (req, res, next) => {
    let authorization = req.headers['authorization'];
    
    if(!authorization){
        return res.json({message: "Please Login Now"})
    }
    let token = authorization.split(" ")[1];
    // console.log(token);
    let {userId, email} = await jwt.verify(token, 'test')
    // console.log(userId, email);
    let user = await User.findById(userId);
    if(user){
        req.user = user;
        next();
    }else{
        return res.json({message: "Invalid Token"});
    }
}