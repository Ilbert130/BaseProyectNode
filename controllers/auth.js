import { request, response } from "express";
import User from "../models/user.js";
import bcryptjs from 'bcryptjs'
import { generateJWT } from "../helpers/generate-jwt.js";




export const renovarToken = async(req=request, res = response) => {
    try {

        const {user} = req;
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        })
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const login = async(req=request, res = response) => { 

    try {

        const {email, password} = req.body;
        const user = await User.findOne({email, state:true});

        if(!user){
            return res.status(400).json({
                msg: 'Email / Password are not valid'
            });
        }

        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Email / Password are not valid'
            });
        }

        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        })
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}