import express from "express";
import { savedisease } from "../controller/disease.controller.js";

const diseaserouter = express.Router();

diseaserouter.post("/savedisease",savedisease);

export default diseaserouter;