const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        // this.statusCode = 400
        this.statusCode = StatusCode.BAD_REQUEST
    }
}

module.exports = BadRequest
