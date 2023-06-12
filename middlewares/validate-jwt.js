import { request, response } from "express";
import * as jwt from 'jsonwebtoken';
import User from "../models/user.js";


//Middleware to validate the JWT
export const validateJWT = async(req = request, res=response, next) => {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg: 'It does not have any token in the request'
        });
    }

    try {

        const {uuid} = jwt .verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findOne({_id:uuid});

        if(!user || !user.state){
            return res.status(401).json({
                msg: 'Token is not valid'
            });
        }

        req.user = user;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'The token is not valid'
        });
    }
}