import { Router } from "express";
import { login, renovarToken } from "../controllers/auth.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { validateAuthPOST } from "../helpers/validators-jwt.js";



const router = Router();

router.get('/renew', validateJWT, renovarToken)

router.post('/login', validateAuthPOST, login)

export {
    router
}