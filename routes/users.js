import { Router, request, response } from "express";
import { userGet } from "../controllers/users.js";
import { validatorUserPOST } from "../helpers/validators-user.js";



const router = Router();

//GET: All
router.get('/', userGet)



export {
    router
}
