const response = require('./../model/response')
const { vendorService } = require('../service')



const addVendor = (req, res) => {
    const vendorName = req.body.vendorName
     console.log("vvendorcontorller",vendorName)
    vendorService.addVendor(vendorName).then(data => {
        res.json(response({ success: true, message: "add success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })

}

module.exports = {
    addVendor
}