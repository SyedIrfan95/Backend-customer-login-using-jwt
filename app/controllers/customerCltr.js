const Customer = require('../models/customers')
const jwt = require('jsonwebtoken')

const customerCltr = { }

customerCltr.show = (req,res)=>{
    Customer.find()
        .then((customers)=>{
            res.json(customers)
        })
        .catch((err)=>{
            res.json(err)
        })
}

customerCltr.register = (req,res)=>{
    const body = req.body
    const token = jwt.sign({
        name:body.name,email:body.email
    },body.password)
    body.token = token
    const customer = new Customer(body)
    customer.save()
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            res.json(err)
        })
}

customerCltr.login = (req,res)=>{
    const {email,password} = req.body
    Customer.findOne({email})
        .then((customer)=>{
            if(customer.password === password){
                res.json(customer)
            }else{
                res.send(`invalid credentials`)
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

customerCltr.remove = (req,res)=>{
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then((customer)=>{
            res.json(customer)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = customerCltr