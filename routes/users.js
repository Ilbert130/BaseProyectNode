import { Router } from "express";
import { userDelete, userGet, userPost, userPut, usersGet } from "../controllers/users.js";
import { validatorUserDELETE, validatorUserGET, validatorUserPOST, validatorUserPUT } from "../helpers/validators-user.js";



const router = Router();

//GET: All
router.get('/', usersGet);

//GET
router.get('/:id', validatorUserGET, userGet);

//POST
router.post('/', validatorUserPOST, userPost);

//PUT
router.put('/:id', validatorUserPUT, userPut);

//DELETE
router.delete('/:id', validatorUserDELETE, userDelete);

export {
    router
}
