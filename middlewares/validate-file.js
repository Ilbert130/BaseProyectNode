import { request, response } from "express";




export const validateFile = (req = request, res = response, next) => {

    if(!req.files || Object.keys(req.files).length === 0 || !req.files.file){
        return res.status(400).json({
            msg: 'It does not have file to upload'
        })
    }

    next();
}