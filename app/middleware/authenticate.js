const jwt = require('jsonwebtoken')
const Customer = require('../models/customers')

const verify = (req,res,next)=>{
    const {email} = req.body
    const token = req.headers['authorization'].split(' ')[1]
    if(!token){
        res.json('token not available')
    }else{{
        Customer.findOne({email})
        .then((customer)=>{
            const decoded = jwt.verify(token,customer.password,customer.token)
            if(decoded){
                req.customer = decoded
                next()
            }else{
                res.json('invalid token')
            }
        })
        .catch((err)=>{
            res.json(err)
        })
    }}
}

module.exports = verify