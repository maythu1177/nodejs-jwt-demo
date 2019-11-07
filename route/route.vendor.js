const express = require('express')
const {vendorController} = require('../controller')
const authMiddleware = require('./middleware')

const router = express.Router()

router.use(authMiddleware)

router.post('/',vendorController.addVendor)


module.exports= router