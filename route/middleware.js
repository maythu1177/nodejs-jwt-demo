const { verifyToken} = require("../security/token")
const response = require("../model/response")


const authMiddleware = (req,res,next) =>{
    const authorization = req.headers['authorization']
    const authFail = response({success:false,message:"Not authorized user"})
    if(!authorization){
        return res.json(authFail)
    }
   else if(! authorization.split(" ")[1]){
    return res.json(authFail) 
   }
   else {
      return verifyToken(`${authorization.split(" ")[1] }`).then(res =>{
         console.log(res)
         next()
      }).catch(err=>err)
   }
}

module.exports = authMiddleware