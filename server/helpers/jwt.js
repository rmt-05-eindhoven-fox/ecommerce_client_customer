const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const generateToken = (user)=> {
    const access_token = jwt.sign({ 
        id: user.id,
        email: user.email},
        secret);
    return access_token
}

const verifyToken = (token) => {
    const verified = jwt.verify(token,secret)
    return verified
}


module.exports = {generateToken, verifyToken}
