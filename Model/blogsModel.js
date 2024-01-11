
const mongoose=require("mongoose")
const indivisualBlog=mongoose.Schema(
    {
        title:{type:String,required:true},
        content:{type:String,required:true},
        userId: String,
        timestamp:String,
    
    },
    {versionKey:false}
)

const indivisualBlogModel=mongoose.model('Blog',indivisualBlog)
module.exports={
     indivisualBlogModel
}