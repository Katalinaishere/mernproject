const mongoose =require("mongoose")

const itemSchema = mew mongoose.Schema({
    itemName: {
        type: String, 
        require: true,
        trim: true 
    },
    itemDesc:{
        type: String
    },
})

const Items =mongoose.model("Items", itemSchema)
module.exports=Items