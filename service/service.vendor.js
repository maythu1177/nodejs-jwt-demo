const demodb = require('../db')


const addVendor = (vendorName) =>{
    return demodb.addVendor(vendorName)
}

module.exports={
    addVendor
}