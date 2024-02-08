const express=require("express")
const patientModel = require("../models/patientModel")
const router=express.Router()

router.post("/patient_entry",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let result=await patient.save()
    res.json(
        {
            status: "success"
        }
    )
})

    router.get("/patient_view",async(req,res)=>{
        let data=await patientModel.find()
        res.json(data)
    })






module.exports=router