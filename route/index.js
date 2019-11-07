const express = require('express')
const router = express.Router()
const authRouter = require('./route.authentication')
const vendorRouter = require('./route.vendor')

router.use("/auth",authRouter)

router.use("/vendor",vendorRouter)

module.exports = router