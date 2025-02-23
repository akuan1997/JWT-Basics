const jwt = require('jsonwebtoken');
// const customAPIError = require('../errors/custom-error')
const { UnanthenticatedError } = require('../errors')
const UnauthenticatedError = require("../errors/unauthenticated");

const authenticationMiddleware = async (req, res, next) => {
    console.log('1-1')
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // throw new customAPIError('No token provided', 401)
        throw new UnauthenticatedError('No token provided');
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        console.log('1-2')
        next()
    } catch (error) {
        // throw new customAPIError('Not authorized to access this route', 401)
        throw new UnauthenticatedError('Not authorized to access this route');
    }

}

module.exports = authenticationMiddleware