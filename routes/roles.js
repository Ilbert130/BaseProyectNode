import { Router, request, response } from "express";





const router = Router();

router.get('/', (req = request, res = response) => {
    res.json({
        msg: 'role created'
    })
})


export {
    router
}