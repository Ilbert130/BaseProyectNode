import { check } from "express-validator";
import User from "../models/user.js"
import { validateFields } from "../middlewares/validate-fields.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { roleVerification } from "../middlewares/validate-roles.js";


//verifying if a user exist by its id
const existUserById = async(id) => {
    const userById = await User.findById(id);
    if(!userById){
        throw new Error(`The user with id ${id} doesn't exist`);
    }
}

//verifying if the email exist
const existEmail = async(email) => {
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error(`The email ${email} already exist`);
    }
}

//GET
export const validatorUserGET = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existBookById(id)),
    validateFields
]

//POST
export const validatorUserPOST = [
    validateJWT,
    roleVerification('ADMIN_ROLE'),
    check('email', 'The email address is not valid').isEmail(),
    check('email').custom(email => existEmail(email)),
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must have at least 6 characters').isLength({min:6}),
    validateFields
]

//PUT
export const validatorUserPUT = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existBookById(id)),
    validateFields
]

//DELETE
export const validatorUserDELETE = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existBookById(id)),
    validateFields
]
