const express = require("express");
let app = express()
const farmerAccountDetails = require('../databaseModels/farmerAccountDetails');
const cropDetails = require('../databaseModels/CropDetails');
const {request, response} = require("express");
app.get("/farmerAccountDetails", async (request, response) => {
    try {
        const farmer = await farmerAccountDetails.find({});
        response.send(farmer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post('/farmerRegistration',async(request,response)=>{
    try {
        const farmer = new farmerAccountDetails(request.body);
        console.log(farmer);
        await farmer.save();
        response.send(farmer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/farmerUpdate/:id", async (request, response) => {
    try {
        const farmer = await farmerAccountDetails.findByIdAndUpdate(request.params.id, request.body);
        await farmer.save();
        response.send(farmer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/farmerLogin", async(request,response)=>{
   try{
    const farmer = await farmerAccountDetails.find(request.body.emailId);
    if(request.body.password === farmer.password){
           response.send(farmer);
    }
   }catch (error){
       response.status(403).send(error)
   }
});

app.post("/AddCrop",async(request,response)=>{
    try {
        const CropDetails = new cropDetails(request.body);
        await CropDetails.save();
        response.send(CropDetails);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/CropDetails",async(request,response)=>{
    try{
    const CropDetails = await cropDetails.find(request.body.farmerEmailId);
    response.send(CropDetails);
    }catch(error){
        response.status(500).send(error);
    }
});
app.patch("/updateCrop/:id",async (request,response)=>{
   try{
       const CropDetails = await cropDetails.findByIdAndUpdate(request.params.id, request.body);
       await CropDetails.save();
       response.send(CropDetails);

   } catch(error){
       response.status(500).send(error);
   }
});
module.exports = app;
