const express = require('express')
const router = express.Router()
const customerCltr = require('../controllers/customerCltr')
const verify = require('../middleware/authenticate')

router.get('/api/customers',customerCltr.show)
router.post('/api/register',customerCltr.register)
router.get('/api/login',verify,customerCltr.login)
router.delete('/api/customers/:id',verify,customerCltr.remove)

module.exports = router