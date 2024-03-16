import express from "express";
import { body } from "express-validator";
import { addToCart,fetchCartItems } from "../controller/cart.controller.js";

const cartrouter = express.Router();

cartrouter.post("/add-to-cart",body('userId','Invalid user id').notEmpty().isNumeric(),
body('productId','Invalid product Id').notEmpty(),
addToCart);

cartrouter.get("/list/:userId",fetchCartItems);


export default cartrouter;  