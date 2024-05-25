const mongoose = require("mongoose");

const orderDetails = new mongoose.Schema({
   farmerEmailId:{
       type: String
   },
    consumerEmailId:{
       type : String
    },
    cropName:{
       type: String
    },
    Quantity :{
       type : String
    },
    rate : {
       type : String
    },
    deliveryType :{
       type : String
    },
    totalCost :{
       type: String
    }
});

const order = mongoose.model("orderDetails",orderDetails);
module.exports = order;
