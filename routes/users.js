import { Router, request, response } from "express";
import { userGet } from "../controllers/users.js";




const router = Router();

//GET: All
router.get('/', userGet)



export {
    router
}
