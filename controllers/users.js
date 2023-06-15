import { request, response } from "express";
import User from '../models/user.js';
import bcryptjs from 'bcryptjs'


//GET": All
export const usersGet = async(req=request, res= response) => {
    try {
        const {limit = 5, since = 0} = req.query;
        const query = {state:true};

        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(+since)
                .limit(+limit).populate('role','role')
        ]);

        res.json({
            total,
            users
        });

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//GET
export const userGet = async(req = request, res = response) => {
    try {
        
        const {id} = req.params;
        const user = await User.findOne({_id:id, state:true}).populate('role','role');

        res.json({
            user
        });

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//POST
export const userPost = async(req = request, res = response) => {
    try {
        
        const {name, email, password, img='No_Image_Available.jpg', role} = req.body;
        const user = new User({name, email, password, img, role});

        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();
        res.json({user});

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//PUT
export const userPut = async(req = request, res = response) => { 
    try {
        const {id} = req.params;
        const {password, ...resto} = req.body;

        if(password){
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);
        }

        const userUpdate = await User.findOneAndUpdate({_id:id, state:true}, {...resto}, {new:true});

        res.json({
            user:userUpdate
        });
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//DELETE
export const userDelete = async(req = request, res = response) => {
    try {
        const {id} = req.params;
        const user = await User.findOneAndUpdate({_id:id, state:true}, {state:false}, {new:true});

        res.json({
            user
        });
        
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}