const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://sajan:kumar@cluster0.rv5boht.mongodb.net/Blogers?retryWrites=true&w=majority")

module.exports={
    connection
}