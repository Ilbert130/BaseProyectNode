import { Router } from "express";
import { uploadFilePost } from "../controllers/uploads.js";
import { validateFile } from "../middlewares/validate-file.js";



const router = Router();


//Post
router.post('/:directory', validateFile, uploadFilePost)

export {
    router
}
