import { check } from "express-validator";
import User from "../models/user"
import { validateFields } from "../middlewares/validate-fields";




//verifying if the email exist
const existEmail = async(email) => {
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error(`The email ${email} already exist`);
    }
}

//POST
export const validatorUserPOST = [
    check('email', 'The email address is not valid').isEmail(),
    check('email').custom(email => existEmail(email)),
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must have at least 6 characters').isLength({min:6}),
    validateFields
]