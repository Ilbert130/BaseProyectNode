import { Router } from "express";
import { productDelete, productGet, productPost, productPut, productsGet } from "../controllers/products.js";
import { validatorProductDELETE, validatorProductGET, validatorProductPOST, validatorProductPUT } from "../helpers/validators-product.js";


const router = Router();

router.get('/', productsGet);

router.get('/:id', validatorProductGET, productGet);

router.post('/', validatorProductPOST, productPost);

router.put('/:id', validatorProductPUT, productPut);

router.delete('/:id', validatorProductDELETE, productDelete)

export {
    router
}