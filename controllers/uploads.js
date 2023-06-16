import { request, response } from "express";
import { uploadFile } from "../helpers/upload-files.js";



//GET

//POST
export const uploadFilePost = async(req=request, res=response) => {

    try {

        const {directory} = req.params;
        const fileName = await uploadFile(req.files, ['png', 'jpg', 'jpeg', 'gif', 'img'], directory);

        res.json({
            fileName
        });
        
    } catch (error) {
        res.status(400).json({
            msg: error + 'ilbert'
        });
    }
}

//PUT