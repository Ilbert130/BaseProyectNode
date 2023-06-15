import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";



export const validateAuthPOST = [
    check('email', 'It is not a valid email').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields
]