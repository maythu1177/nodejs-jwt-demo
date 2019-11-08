const {demodb} = require('../db')

const addVendor = (vendorName) => {
    console.log("venodorservice=========",vendorName)
    return demodb.addVendor(vendorName)
}

module.exports= {
    addVendor
}