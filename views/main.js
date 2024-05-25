const Web3 = require('web3');
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient.create({host: 'ipfs.infura.io', port: 5001, protocol:'https'});
global.orderList = function(response) {
    //alert("hi");
    
    //on click api call /addorder, response pe ek function on sucess
    // function parameter response
    response = {"x":"y"};
    const str = JSON.stringify(response);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
      type: "application/json;charset=utf-8"
    });
    var reader = new FileReader();
    //cache response
    reader.readAsArrayBuffer(blob);
    reader.onload = function(e) {
         try{
            ipfs.add(e.target.result).then(result=>{
            console.log(result.path);
                      //cache result.path
          });
        } catch(e){
          console.log("Error: ", e);
        }
    }
   
  
            //};
    }