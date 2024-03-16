import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';

import Userrouter from "./router/user.router.js";
import yogarouter from "./router/yoga.router.js";
import adminrouter from "./router/admin.router.js";
import productrouter from "./router/product.router.js";
import cartrouter from "./router/cart.router.js";

import path from "path";
import categoryrouter from "./router/category.router.js";
import "./model/association.js";
import diseaserouter from "./router/disease.router.js";

const app = express();

let filename = fileURLToPath(import.meta.url);
let dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", Userrouter);
app.use("/yoga", yogarouter);
app.use("/admin",adminrouter);
app.use("/product",productrouter);
app.use("/category",categoryrouter);
app.use("/cart",cartrouter);
app.use("/disease",diseaserouter);

app.listen(3000, () => {
    console.log("server Created");
});

