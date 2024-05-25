const express = require("express");
let app = express()
const farmerAccountDetails = require('../databaseModels/farmerAccountDetails');
const cropDetails = require('../databaseModels/CropDetails');
const {request, response} = require("express");
const consumerAccountDetails = require('../databaseModels/ConsumerAccountDetails');

app.get('/searchFarmer',async (request,response)=>{
   try{
       const farmer = await farmerAccountDetails.find(request.body.farmerName);
       response.send(farmer);
   } catch(error){
       response.status(500).send(error);
   }
});

app.get('/searchCrop',async (request,response)=>{
   try{
       const crop = await cropDetails.find(request.body.cropName);
   } catch(error){
       response.status(500).send(error);
   }
});
