import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import { saveYoga, viewallyoga, viewparticularyoga, deleteyoga, updateyoga } from '../controller/yoga.controller.js';
import { verifytoken } from '../middleware/authenticate.js';
    
const yogarouter = express.Router();
const upload = multer({ dest: "public/image" });
// const uploadvideo = multer({dest : "public/video"});
// yogarouter.post("/save", upload.fields([{ name : "imageUrl",}]), saveYoga);

yogarouter.post("/save",
upload.fields([{ name: "imageUrl", }, { name: "videoUrl" }]),
    body("yoganame", "must be alphabet").isAlpha(),
    body("yoganame", "must be required").notEmpty(),
    body("benefits", "must be required").notEmpty(),
    body("instructions", "must be required").notEmpty(),
    body("imageUrl", "must be required").isEmpty(),
    body("videoUrl", "must be required").isEmpty(),
    saveYoga);

yogarouter.get("/viewallyoga", viewallyoga);

yogarouter.get("/viewparticularyoga",
    body("yoganame", "name must be alpha").isAlpha(),
    body("yoganame", "must be required").notEmpty(),
    viewparticularyoga);

yogarouter.delete("/:id",
    body("id", "must be number").isInt(),
    body("id", "must be required").notEmpty(),
    deleteyoga);


yogarouter.put("/updateyoga",upload.fields([{ name: "imageUrl", }, { name: "videoUrl" }]),
   body("yoganame","must be required").notEmpty(),
   body("yoganame","must be alpha").isAlpha(),
//    body("benefits","must be required").notEmpty(),
//    body("instructions","must be required").notEmpty(),
//    body("imageUrl","must be required").isEmpty(),
//    body("videoUrl","must be required").isEmpty(),
updateyoga);

export default yogarouter;