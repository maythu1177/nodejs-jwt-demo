const mysql2 = require("mysql2")
const util = require("util")

require('dotenv').config()

const mypool = mysql2.createPool({
    connectionLimit: process.env.DB_POOL_SIZE,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const register = (username,email,hash) =>{
query = util.promisify(mypool.query).bind(mypool)
   return query(`INSERT INTO user (username,email,password) VALUES (?,?,?)`,[username,email,hash])
   mypool.end()
}

const login = (email,password) =>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * from user where email='${email}'`)
    mypool.end()
}

const addVendor = (vendorName) =>{
    console.log("vendor query",vendorName)
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO vendor (vendorName) VALUES (?)`,[vendorName])
    mypool.end()
}



module.exports=
{register,login,addVendor}