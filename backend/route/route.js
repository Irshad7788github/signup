const express = require("express")
const User = require('../model/User.model')
const Router = express.Router();

 Router.get('/', async (req, res)=>{
    try {
        const Users = await User.find()
        res.status(200).json(Users)
        
    } catch (error) {
        res.status(400).json({
            mgs: "Not Found"
        })
    }
 })
Router.post('/register',async(req,res)=>{
    try {
        const newRegister = await User.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            username:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            conformpassword:req.body.conformpassword
        })
        if(newRegister){
            res.status(200).json(newRegister)
        }
        else{
            res.status(400).json({
                message:"Not Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            message:"Not Found"
        })
    }
})

Router.post('/login', async(req,res)=>{
    try {
        const newUpdate = await User.findOne({
            email:req.body.email
        })
        if(newUpdate){
            res.status(200).json({
                mgs:"Login Successful", newUpdate
            })
        }
        else{
            res.status(400).json({
                mgs: "Not Found"
            })
        }
    } catch (error) {
        res.status(400).json({
            mgs: "Not Found"
        })
    }
})


module.exports = Router