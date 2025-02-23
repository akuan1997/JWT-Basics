const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCode.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError
