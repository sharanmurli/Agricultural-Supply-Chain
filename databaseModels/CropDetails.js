const mongoose = require("mongoose");

const CropDetails = new mongoose.Schema({
    farmerEmailId:{
        type: String
    },
    cropName:{
        type: String
    },
    Quantity :{
        type: String
    },
    Amount :{
        type:String
    },
    deliveryType :{
        type: String
    }
});
const CropDetail = mongoose.model("CropDetails",CropDetails);
module.exports = CropDetail;
