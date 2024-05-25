//require('dotenv').config();
const express = require('express');
const authRouter = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//const {router} = require("express/lib/application");
const connection = require('./database/connection');
const farmerAccountDetails = require('./routes/farmerRoutes')
async function main(){
    const app = express();
    app.use(morgan('combined'));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(farmerAccountDetails);
    let listener = app.listen(3000,function(){
        console.log('listening to port',3000);
    });
    app.get('/done',function (request,response){
        response.send("done");
    });

}
main()
