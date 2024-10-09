
const jwt = require('jsonwebtoken')


module.exports.authmiddleware = async(req, res ,next)=>{
    try{
const token = req.headers.token
if (!token) res.satatus(401).json.authmiddleware({msg:'not authorized'})
    else{
const verifyToken=jwt.verify(token, process.env.JWT_SECRET)
req.personId =verifyToken.id
next()


 }
    
 }
 catch(error){
        res.satatus(500).json({msg:'somthing went wrong',error:error.message})

 }
}