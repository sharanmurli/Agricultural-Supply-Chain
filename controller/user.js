const apiResponse = require('../utils/apiResponse.js');

exports.signup = async(request, response) =>{
    const { userType, address, name, email, password,mobile } = request.body;
    const { role } = request.params;
    if ((!userType || !address || !name  || !email || !password || !mobile)) {
        console.log('bad request');
        return apiResponse.badRequest(response);
    }
    let modelResponse;
    if(role === 'farmer'){
        modelResponse = await authModel.signup()
    }
}

