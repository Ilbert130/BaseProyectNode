import { Router } from "express";
import { rolePost, rolesGet, roleGet, roleDelete, rolePut } from "../controllers/roles.js";
import { validateRoleDELETE, validateRoleGET, validateRolePOST, validateRolePUT } from "../helpers/validators-role.js";



const router = Router();

//GET: all
router.get('/', rolesGet);

//GET
router.get('/:id', validateRoleGET, roleGet);

//POST
router.post('/', validateRolePOST, rolePost);

//PUT
router.put('/:id', validateRolePUT, rolePut);

//DELETE
router.delete('/:id', validateRoleDELETE, roleDelete);

export {
    router
}