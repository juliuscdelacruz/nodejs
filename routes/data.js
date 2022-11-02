const express = require("express");

const  data = require("../controllers/data"); 

const router = express.Router();

router
    .route('/')
    .get(data.getData);

router
    .route('/api')
    .get(data.getApi)


module.exports=router;