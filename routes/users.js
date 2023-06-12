import { Router, request, response } from "express";




const router = Router();

//GET: All
router.get('/', (req = request, res = response) => {
    
    res.json({
        msg: 'Route configure'
    })

})



export {
    router
}
