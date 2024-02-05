import express  from "express";
import { save,Userlist,getUserByEmail,deleteuser,updateUser} from "../controller/user.controller.js" 


const Userrouter = express.Router();

Userrouter.post("/save",save);
Userrouter.get("/userList",Userlist);
Userrouter.get("/getUserByEmail",getUserByEmail);
Userrouter.delete("/deleteuser",deleteuser);
Userrouter.put("/update",updateUser);

export default Userrouter;  