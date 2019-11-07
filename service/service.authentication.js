const { demodb } = require("../db")
const { produceToken } = require("../security/token")
const response = require('../model/response')
const bcrypt = require('bcrypt');


const register = (username, email, password) => {
    const hash = bcrypt.hashSync(password, 10);
    return demodb.register(username, email, hash)
}

const login = (email, password) => {
    return demodb.login(email, password).then(res => {
        if (res.length) {
            console.log("res", res)
            bcrypt.compare(password, res[0].password, function (err, result) {
                console.log(result, "ur result")
                if (result == true) {
                    console.log("enterbcrypt")
                    const payload = {
                        payload: res[0].username,
                        email: res[0].email,
                    }
                    const token = produceToken(payload);
                    const data = {
                        token: token,
                        username: res[0].username
                    }
                    console.log(data,"ddddddddddddddddd")
                    return data
                }
                else {
                    console.log(err, "bcrypt error")
                }
            });
        }
        else {
            return []
        }
    }).catch(err => err)
}






module.exports = { register, login }