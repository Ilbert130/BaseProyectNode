import { check } from "express-validator";
import Role from "../models/role.js";
import { validateFields } from "../middlewares/validate-fields.js";


const existRole = async(id) => {
    const existRoleById = await Role.findOne({_id:id, state:true});
    if(!existRoleById){
        throw new Error(`The role with id ${id} doesn't exist`);
    }
}


//GET
export const validateRoleGET = [
    check('id', 'Is not a valid id').isMongoId(),
    check('id').custom(id => existRole(id)),
    validateFields
];

//POST
export const validateRolePOST = [
    check('role', 'the role is required'),
    validateFields
];

//PUT
export const validateRolePUT = [
    check('id', 'Is not a valid id').isMongoId(),
    check('id').custom(id => existRole(id)),
    validateFields
]

//DELETE
export const validateRoleDELETE = [
    check('id', 'Is not a valid id').isMongoId(),
    check('id').custom(id => existRole(id)),
    validateFields
]