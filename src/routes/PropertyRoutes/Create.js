const express = require('express');
const createPropertyH = require('../../handlers/PropertyH/CreateNewRentH')
const getProperty = require('../../handlers/PropertyH/getAllProperty')


const router = express.Router()

router.post('/post', createPropertyH);
router.get('/getProduct', getProperty)


module.exports = router;