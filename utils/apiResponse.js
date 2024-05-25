exports.badRequest = response => {
    return response.status(400).json({
        message: 'This is not valid request',
        data: {},
    });
};

