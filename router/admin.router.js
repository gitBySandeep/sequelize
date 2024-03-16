import  express  from "express";
import bodyParser from "body-parser";
import { body } from "express-validator";
// import { sign } from "jsonwebtoken";
const  adminrouter = express.Router();  

import { saveadmin,signinadmin,adminlist ,deleteadmin} from "../controller/admin.controller.js";

adminrouter.post("/saveadmin",
body("name","must be required").notEmpty(),
body("name","must be alpha").isAlpha(),
body("email","must be right ").isEmail(),
body("email","must be required").notEmpty(),
body("password","must be 5 digits").isLength({min:5}),
body("password","must be required").notEmpty(),
saveadmin);

adminrouter.post("/signinadmin",
body("email","email is required").isEmail(),
body("password","password must be 5 digits").isLength({min:5}),
body("password","must be required").notEmpty(),
signinadmin);

adminrouter.get("/adminlist",adminlist);
adminrouter.delete("/delete",
body("id","must be number").isInt(),
deleteadmin)
export default adminrouter;