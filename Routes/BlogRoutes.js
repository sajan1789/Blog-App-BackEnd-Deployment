
const express=require("express")
const BlogRoutes=express.Router()
BlogRoutes.use(express.json())
const {indivisualBlogModel}=require("../Model/blogsModel")
const {auth}=require("../MiddleWare/auth")
BlogRoutes.get("/",auth,async(req,res)=>{
        try{
            const notes=await indivisualBlogModel.find({"userId":req.body.userId})
            res.send(notes)
        }
        catch(err){
            res.send({"error":err.message})
        }
})
BlogRoutes.post("/add",auth, async(req,res)=>{
    try{
      const user=new indivisualBlogModel(req.body)
      await user.save()
      res.status(200).send({"msg":"New Blogs added"})
    }catch(err){
     res.status(400).send(err)
    }
})
BlogRoutes.delete("/delete/:id",auth,async(req,res)=>{
    const {id}=req.params
    console.log("id",id)
    if(id){
        try{
        await indivisualBlogModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Blogs has been deleted "})
        }catch(err){res.send({"error":err.message})}
    }
})
BlogRoutes.patch("/edit/:id",auth,async(req,res)=>{
    const {id}=req.params
    const payload=req.body
    console.log(payload)
    if(id){
        try{
            await indivisualBlogModel.findByIdAndUpdate({"_id":id},payload)
            res.send("update successfully")
        }catch(err){res.send({"error":err.message})}
    }
})

module.exports={
    BlogRoutes
}
