const express= require('express');

const router= express.Router();

const getData = async (req, res) => {
    try {
        const response = "Hello world"
        console.log(response)
        res.status(200).json(response);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getApi = async (req, res) => {
    try {

        res.status(200).json(res);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


module.exports.getData= getData;
module.exports.getApi= getApi;