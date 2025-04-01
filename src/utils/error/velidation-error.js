const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error{
    constructor(error){
        super(); 
        let explanation =[];
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        this.name = "validation Error",
        this.message = "not able to validate the data";
        this.explanation = explanation;
        this.StatusCode = StatusCode;
    }
}

module.exports = ValidationError;