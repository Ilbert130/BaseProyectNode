import { check } from 'express-validator';
import { validateFields } from '../middlewares/validate-fields.js';
import Product from '../models/product.js';


const existProductById = async(id) => {
    const productById = await Product.findOne({_id:id, state:true});
    if(!productById){
        throw new Error(`The product with id ${id} doesn't exist`);
    }
}

//GET
export const validatorProductGET = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existProductById(id)),
    validateFields
]

//POST
export const validatorProductPOST = [
    check('name', 'The name is required').not().isEmpty(),
    check('description', 'The description is required').not().isEmpty(),
    check('amount', 'The amount is required').not().isEmpty(),
    check('price', 'The price is required').not().isEmpty(),
    check('user', 'The user is required').not().isEmpty(),
    validateFields
]

//PUT
export const validatorProductPUT = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existProductById(id)),
    validateFields
]

//DELETE
export const validatorProductDELETE = [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(id => existProductById(id)),
    validateFields
]
