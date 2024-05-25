const express = require("express");
let app = express()
const farmerAccountDetails = require('../databaseModels/farmerAccountDetails');
const cropDetails = require('../databaseModels/CropDetails');
const orderDetails = require('../databaseModels/orderDetails');
const {request, response} = require("express");

app.post('/addOrder',async (request,response)=>{
   try{
       const order = new orderDetails(request.body);
       await order.save();
       response.send(order);
   }catch(error){
       response.status(500).send(error);
   }

});

app.get('/getAllFarmerOrders', async (request,response)=>{
   try{
       const order = await orderDetails.find(request.body.farmerEmailId);
       response.send(order);
   } catch(error){
       response.status(500).send(error);
   }
});

app.get('/getAllConsumerOrders', async (request,response)=>{
    try{
        const order = await orderDetails.find(request.body.consumerEmailId);
        response.send(order);
    } catch(error){
        response.status(500).send(error);
    }
});

