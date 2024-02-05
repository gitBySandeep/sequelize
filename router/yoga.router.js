import express  from 'express';
import multer from 'multer';

import { saveYoga } from '../controller/yoga.controller.js';

const yogarouter = express.Router();
// const upload = multer({dest : "public/image"});

// yogarouter.post("/save", upload.fields([{ name : "imageUrl",}]), saveYoga);
yogarouter.post("/save", saveYoga);

export default yogarouter;