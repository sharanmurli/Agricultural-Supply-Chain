const mongoose = require("mongoose");

const consumerAccountDetails = new mongoose.Schema({
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
const consumer = mongoose.model("consumerAccountDetails",consumerAccountDetails);
module.exports = consumer;

