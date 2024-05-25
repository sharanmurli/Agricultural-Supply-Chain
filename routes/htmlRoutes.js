const express = require('express');
const app = express();
const path = require('path');

app.get('../public/css/',function(request,response){
   response.sendFile(path.join(__dirname,'../public'+'/assets'+'/css'+''));
});


