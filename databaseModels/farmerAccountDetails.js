const mongoose = require("mongoose");

const farmerAccountDetails = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    emailId:{
        type : String
    },
    password:{
        type : String
    },
    address:{
      type: String
    },
    Mobile:{
        type: String
    },
    UserType:{
        type: String
    }
});
const farmer = mongoose.model("farmerAccountDetails",farmerAccountDetails);
module.exports = farmer;

