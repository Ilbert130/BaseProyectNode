import { Router } from "express";
import { rolePost, rolesGet, roleGet, roleDelete, rolePut } from "../controllers/roles.js";




const router = Router();

//GET: all
router.get('/', rolesGet);

//GET
router.get('/:id', roleGet);

//POST
router.post('/', rolePost);

//PUT
router.put('/:id', rolePut);

//DELETE
router.delete('/:id', roleDelete);

export {
    router
}