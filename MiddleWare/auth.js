
const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,"shhhhh")
        if(decode){
            
            req.body.userId=decode.userId
            
            next()
        }
        else{
            res.status(400).send({"msg":"Please Login First"})
          }
    }
    else{
        res.status(400).send({"msg":"Please Login First--"})
    }

}

module.exports={
    auth
}