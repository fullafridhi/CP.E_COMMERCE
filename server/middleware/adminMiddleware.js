
const jwt = require('jsonwebtoken')


module.exports.adminMiddleware = async(req, res ,next)=>{
    try{
const token = req.headers.token
if (!token) res.satatus(401).json.adminMiddleware({msg:'not authorized/admin'})
    else{
const verifyToken=jwt.verify(token, process.env.JWT_SECRET)
if (!verifyToken) res.status.json({msg:'you are not authorized as token'});

 else {

    if(verifyToken.role == 'admin'){
       req.body.userId=verifyToken.id;
       next();
    }
    else{
        res.status.json({msg:'you are not authorized us role'});
    }
}
}
    
 }
 catch(error){
        res.satatus(500).json({msg:'somthing went wrong/adminMiddleware',error:error.message})

 }
}