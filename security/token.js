const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('security/private.key');
const publicKey = fs.readFileSync('security/public.pem');

//@maythu
const produceToken = (payload) => {
    return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: "1d" });
}

const verifyToken = token => {
    return jwt.verify(token,publicKey)
}
module.exports.produceToken = produceToken;
module.exports.verifyToken = verifyToken;                                  