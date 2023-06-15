import { request, response } from "express";
import Role from '../models/role.js';



//GET:All
export const rolesGet = async(req = request, res = response) => {
    try {

        const {limit = 5, since = 0} = req.query;
        const query = {state:true};

        const [total, roles] = await Promise.all([
            Role.countDocuments(query),
            Role.find(query).skip(+since).limit(+limit)
        ]);

        res.json({
            total,
            roles
        });
        
    } catch (error) {
        console.log(error);
    }
}

//GET
export const roleGet = async(req = request, res = response) => {
    try {

        const {id} = req.params;
        const query = {state:true};

        const role = await Role.findOne({_id:id, state:query});

        res.json({
            role
        });
        
    } catch (error) {
        console.log(error);
    }
}


//POST  
export const rolePost = async(req = request, res = response) => {
    try {
        
        const role = req.body.role.toUpperCase();
        const roleDB = await Role.findOne({role});

        if(roleDB){
            return res.status(400).json({
                msg: `The role ${roleDB.role} is already exist`
            });
        }

        const newRole = new Role({role});
        await newRole.save();

        res.status(201).json({
            role: newRole
        })

    } catch (error) {
        console.log(error);
    }
}

//PUT
export const rolePut = async(req = request, res = response) => {
    try {
        const {id} = req.params;
        const query = {state:true};
        const role = req.body.role.toUpperCase();

        const roleUpdate = await Role.findOneAndUpdate({_id:id, state:query}, {role}, {new:true});

        res.json({
            role:roleUpdate
        });

    } catch (error) {
        console.log(error);
    }
}

//DELETE
export const roleDelete = async(req = request, res = response) => {
    try {
        
        const {id} = req.params;
        const query = {state:true};
        
        const role = await Role.findOneAndUpdate({_id:id, state:query}, {state:false}, {new:true});
        
        res.json({
            role
        });

    } catch (error) {
        console.log(error);
    }
}