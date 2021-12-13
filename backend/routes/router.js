const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get("",async(req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).send(tasks);
    }catch(e){
        console.log(e);
    }
})

router.post("",async(req,res)=>{
    try{
        const task = await Task(req.body);
        const taskSave = await task.save();
        res.status(200).send("Successfully created...")
    }catch(e){
        console.log(e);
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const task = await Task.findById(id);
        res.status(200).send(task)
    }catch(e){
        console.log(e);
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(id, req.body, { new:true });
        res.status(200).send(task)
    }catch(e){
        console.log(e);
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        res.status(200).send("Task deleted...");
        
    }catch(e){
        console.log(e)
    }
})

module.exports = router;