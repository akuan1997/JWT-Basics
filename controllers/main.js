const jwt = require('jsonwebtoken');
const customAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new customAPIError('Please provide email and password', 400)
    }
    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})
    console.log(username, password);
    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
    // console.log(req.headers)
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new customAPIError('No token provided', 401)
    }
    const token = authHeader.split(' ')[1]
    console.log(token);
    console.log(process.env.JWT_SECRET);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('a' + decoded)
        const luckyNumber = Math.floor(Math.random() * 100)  // 0 ~ 99

        res.status(200).json({ msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
        // console.log(decoded)
    } catch (error) {
        console.log(error)
        throw new customAPIError('Not authorized to access this route', 401)
    }

}

module.exports = {
    login,
    dashboard,
}

