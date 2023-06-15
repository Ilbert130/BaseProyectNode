import { Router } from "express";
import { userDelete, userGet, userPost, userPut, usersGet } from "../controllers/users.js";
import { validatorUserPOST } from "../helpers/validators-user.js";



const router = Router();

//GET: All
router.get('/', usersGet);

//GET
router.get('/:id', userGet);

//POST
router.post('/', userPost);

//PUT
router.put('/:id', userPut);

//DELETE
router.delete('/:id', userDelete);

export {
    router
}
