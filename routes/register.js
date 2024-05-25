
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
var conn =mongoose.Collection;

var employeeSchema =new mongoose.Schema({
	fname: String,
    lname:String,
	email: String,
	phone: String,
    Address: String,
	country: String,
    password: String,
    usertype:String,
	
});

var empModel = mongoose.model('SupplyChain', employeeSchema);
var employee =empModel.find({});

router.post('/', function(req, res, next) {
  var empDetails = new empModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    Address: req.body.Address,
    country: req.body.country,
    password:req.body.password,
    usertype:req.body.usertype,
  });
  

  empDetails.save(function(err,req1){
    if(err) throw err;
    employee.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Employee Records', records:data, success:'Record Inserted Successfully' });
        });
  })
  
  
});
