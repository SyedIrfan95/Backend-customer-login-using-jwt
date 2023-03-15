const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const configureDB = require('./app/config/database')
const router = require('./app/config/route')

configureDB()

app.use(express.json())

app.use(router)

const port = 3066

app.listen(port,()=>{
    console.log('server is running on port',port)
})