const express= require ("express")
const mongoose=require("mongoose")
const cors =require('cors')
const session=require("express-session")
const itemRoute =require("./routes/itemRoute")
const app =express()
app.use(cors())

mongoose.connect('mongodb+srv://Katalina:blaccat22@cluster1.8pbiw.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster1')
.then(()=>(
    console.log("Db start")
))
.catch(()=>{
    console.log("Not started")
})
app.use(itemRoute)

app.listen(5000, ()=>{
    console.log("Server created")
})