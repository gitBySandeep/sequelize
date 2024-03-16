import express from "express";
import { save, Userlist, getUserByEmail, deleteuser, updateUser, signIn ,addcolumn} from "../controller/user.controller.js"
import { body } from "express-validator";
import { verifytoken } from "../middleware/authenticate.js";

const Userrouter = express.Router();

Userrouter.post("/save",
    body("email", "Invalid Email Id").isEmail(),
    body("password", "Password is Required").notEmpty(),
    body("password", "Password must have 5 digits").isLength({ min: 5 }),
    body("name", "Name is required").notEmpty(),
    body("name", "Only alphabete are Allowed").isAlpha(),
    save);

Userrouter.post("/signin",
    body("email", "Email is valid").isEmail(),
    body("password", "Password is required").notEmpty(),
    body("password", "Password must be 5 digits").isLength({ min: 5 }),
    signIn);

Userrouter.get("/userList",verifytoken, Userlist);

Userrouter.get("/getUserByEmail",verifytoken,
body("email","Email is valid").isEmail(),
getUserByEmail);

Userrouter.delete("/:id", 
   body("id","must be number").isInt(),
deleteuser);

Userrouter.put("/update",verifytoken, 
body("email","Email is valid").isEmail(),
// body("password","password at least 5 digit").isLength({min:5}),
// body("password","password is required").notEmpty(),
body("name","only alphabet").isAlpha(),
body("name","Name is required").notEmpty(),
updateUser);

// Userrouter.put("/addcolumn",addcolumn)

export default Userrouter;  
