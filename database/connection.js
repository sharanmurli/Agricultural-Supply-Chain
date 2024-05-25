const mongoose = require('mongoose');

const url = "mongodb+srv://bhagyashree:veenu@blockchain.qjqns.mongodb.net/Blockchain?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
};
var connection = mongoose.connect("mongodb+srv://bhagyashree:veenu@blockchain.qjqns.mongodb.net/Blockchain?retryWrites=true&w=majority")
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = connection;

