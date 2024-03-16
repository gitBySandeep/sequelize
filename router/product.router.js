import express  from "express";
import { verifytoken } from "../middleware/authenticate.js";
import { saveproduct ,productlist,particularproduct} from "../controller/product.controller.js";
import { body } from "express-validator";

const productrouter = express.Router();

productrouter.post("/save",saveproduct);
    
productrouter.get("/productlist",productlist);
productrouter.get("particularproduct",particularproduct);
export default productrouter;