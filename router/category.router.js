import express from "express";
import { fetchCategory,savecategory } from "../controller/category.controller.js";

const categoryrouter = express.Router();

categoryrouter.post("/save",savecategory);
categoryrouter.get("/list",fetchCategory);

export default categoryrouter;