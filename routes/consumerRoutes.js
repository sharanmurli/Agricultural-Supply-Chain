const express = require("express");
let app = express()
const consumerAccountDetails = require('../databaseModels/ConsumerAccountDetails');

app.get("/consumerAccountDetails", async (request, response) => {
    const consumer = await consumerAccountDetails.find({});

    try {
        response.send(consumer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post('/consumerRegistration',async(request,response)=>{
    const consumer = new consumerAccountDetails(request.body);
    console.log(consumer);
    try {
        await consumer.save();
        response.send(consumer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/consumerUpdate/:id", async (request, response) => {
    try {
        const consumer = await consumerAccountDetails.findByIdAndUpdate(request.params.id, request.body);
        await consumer.save();
        response.send(consumer);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/consumerLogin", async(request,response)=>{
    try{
        const consumer = await consumerAccountDetails.find(request.body.emailId);
        if(request.body.password === consumer.password){
            response.send(consumer);
        }
    }catch (error){
        response.status(403).send(error)
    }
});
//blah
module.exports = app;
