const response = require('./../model/response')
const { authService } = require('../service')


const register = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    authService.register(username, email, password).then(data => {
        res.json(response({ success: true, message: "reigster success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    authService.login(email, password).then(data => {
        res.json(response({ success: true, payload: data }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}



module.exports = {
    register, login
}