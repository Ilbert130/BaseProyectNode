import { request, response } from "express"
import Role from '../models/role.js';


export const roleVerification = (...roles) => {

    //This function return a middleware
    return async(req=request, res=response, next) => {

        let hasRoles;

        //Verifying if the req has the user's information
        if(!req.user){
            return res.status(500).json({
                msg: 'It is necesary to validate the token at first and then validate the role'
            });
        }

        //Verifying role
        const roleIds = [...req.user.role];

        for(let i = 0; i<roleIds.length; i++){

            const id = roleIds[i].toString();
            const role = await Role.findById(id);
            hasRoles = roles.includes(role.role);

            if(hasRoles){
                break;
            }
        }

        if(!hasRoles){
            return res.status(401).json({
                msg:`This service require one of these roles ${roles}`
            });
        }
        next();
    }
}