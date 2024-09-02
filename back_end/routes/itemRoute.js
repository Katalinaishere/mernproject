const express = require ("express")
const itemModel= require("../models/itemModel")

const app= express()

//CRUD
//create: post 
app.post('', async(req, res)=>{
    try{

    }catch(err){
    res.status(500).send("Not Created"+err)
    }
})

//read: get
app.get('',async(req, res)=>{
    try{

    }catch(err){
        res.status(500).send("Not createrd"+err)

    }
})
//update : put patch
app.put('',async(req, res)=>{
    try{

    }catch(err){
        res.status(500).send("Not createrd"+err)
        
    }
})
app.patch('',async(req, res)=>{
    try{

    }catch(err){
        res.status(500).send("Not createrd"+err)
        
    }
})
//delete: delete
app.delete('',async(req, res)=>{
    try{

    }catch(err){
        res.status(500).send("Not createrd"+err)
        
    }
})


module.exports=app