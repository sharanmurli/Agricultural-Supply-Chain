function orderList() {
    alert("hi");
    const Web3 = require('web3');
    const ipfsClient = require("ipfs-http-client");
    const ipfs = new ipfsClient({host: 'ipfs.infura.io', port: 5001, protocol:'https'});
    //on click api call /addorder, response pe ek function on sucess
    // function parameter response
    var reader = new FileReader();
    //cache response
    reader.readAsArrayBuffer(response);
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