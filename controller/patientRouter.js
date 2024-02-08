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


module.exports=router