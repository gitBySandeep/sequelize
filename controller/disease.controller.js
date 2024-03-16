import { request, response } from "express";
import disease from "../model/disease.model.js";
import { validationResult } from "express-validator";

export const savedisease = async (request, response, next) => {
    disease.create({
        diseaseName: request.body.diseasename,
    })
        .then((result) => {
            return response.status(200).json({ message: " disease save successfully" })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Internal server error" });
        })
}
