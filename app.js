import  express from "express";
import bodyParser from "body-parser";

import Userrouter from "./router/user.router.js";
import yogarouter from "./router/yoga.router.js";
const app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",Userrouter);
app.use("/yoga",yogarouter);

app.listen(3000,()=>{
    console.log("server Created");
});

