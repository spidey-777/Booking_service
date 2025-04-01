const { StatusCodes, StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = "something went wrong",
        explanation= " service layer error",
        StatusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    ){
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.StatusCode = StatusCode;
    }

}

module.exports = ServiceError;
